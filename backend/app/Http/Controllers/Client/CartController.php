<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function list(){
        $cart = Cart::with('cartItems.course.teacher')->where('user_id', request()->user()->id)->first();
        return response()->json($cart);
    }

    public function addToCart(Request $request){
        $cart = Cart::query()->firstOrCreate([
            'user_id' => request()->user()->id,
        ]);
        $cartItem = CartItem::create([
            'cart_id' => $cart->id,
            'course_id' => $request->course_id,
        ]);
        return response()->json([
            'message' => 'Course added to cart successfully',
            'cart' => $cart,
            'cartItem' => $cartItem,
        ]);
    }
}
