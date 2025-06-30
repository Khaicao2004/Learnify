<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Course;

class CourseController extends Controller
{
    public function homeCourses()
    {
        $courses = Course::query()
            ->with(['teacher', 'category'])
            ->withCount('enrolledStudents')
            ->take(3)
            ->where('is_published', true)->get();
        return response()->json($courses);
    }
}
