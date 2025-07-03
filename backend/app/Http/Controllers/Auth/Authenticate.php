<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Authenticate extends Controller
{
    public function register(Request $request)
    {
        
        return response()->json(['status' => 200]);
    }
}
