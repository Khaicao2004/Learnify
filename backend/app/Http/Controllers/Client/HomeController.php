<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function getTeachers(){
        $teachers = User::query()->where('role', 'teacher')->get();
        return response()->json( $teachers);
    }

    public function getCourses(){
        $courses = Course::query()->where('is_published', true)->get();
        return response()->json($courses);
    }
}
