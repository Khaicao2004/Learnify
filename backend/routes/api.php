<?php

use App\Http\Controllers\Client\CourseController;
use App\Http\Controllers\Client\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::get('teachers', [TeacherController::class, 'homeTeachers'])->name('teachers.getTeachers');
Route::get('courses', [CourseController::class, 'homeCourses'])->name('teachers.getCourses');