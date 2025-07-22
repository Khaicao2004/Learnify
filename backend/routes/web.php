<?php

use App\Http\Controllers\DemoController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('courses', [DemoController::class, 'courses'])->name('courses.index');
Route::post('carts', [DemoController::class, 'addCart'])->name('carts.addCart');
