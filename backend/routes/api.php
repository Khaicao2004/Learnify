<?php

use App\Http\Controllers\Auth\Authenticate;
use App\Http\Controllers\Client\CourseController;
use App\Http\Controllers\Client\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// courses
Route::get('limit-courses', [CourseController::class, 'homeCourses'])->name('courses.homeCourses');
Route::get('courses', [CourseController::class, 'courses'])->name('courses');
Route::get('courses/{slug}', [CourseController::class, 'courseDetails'])->name('teachers.courseDetails');

// Teacher
Route::get('limit-teachers', [TeacherController::class, 'homeTeachers'])->name('teachers.homeTeachers');
Route::get('teachers', [TeacherController::class, 'teachers'])->name('teachers');

//auth
Route::post('register', [Authenticate::class, 'register'])->name('auth.register');
Route::post('login', [Authenticate::class, 'login'])->name('auth.login');