<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Course;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function checkout(Request $request)
    {
        // return response()->json($request->all());
        try {
            DB::beginTransaction();
            $order = Order::query()->create([
                'user_id' => $request->user_id,
                'user_name' => $request->user_name,
                'user_email' => $request->user_email,
                'user_phone' => $request->user_phone,
                'total_price' => $request->total_price,
            ]);
            
            if ($order && $request->cart_items) {
                foreach ($request->cart_items as $item) {
                    $course = Course::query()->find($item['course_id']);
                    OrderItem::query()->create([
                        'order_id' => $order->id,
                        'course_id' => $item['course_id'],
                        'course_title' => $course->title,
                        'course_thumbnail' => $course->thumbnail,
                        'course_price' => $course->price,
                    ]);
                    $course->enrolledStudents()->attach(request()->user()->id);
                }
            }
            $user = User::query()->find($request->user_id);
            if($user){
                $user->update([
                    'phone_number' => $request->user_phone,
                ]);
            }
            Cart::query()->where('user_id', $request->user_id)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Order created successfully',
            ], 200);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
