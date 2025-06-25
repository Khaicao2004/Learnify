<?php

use App\Http\Controllers\Client\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('teachers', [HomeController::class, 'getTeachers'])->name('teachers.getTeachers');
Route::get('courses', [HomeController::class, 'getCourses'])->name('teachers.getCourses');