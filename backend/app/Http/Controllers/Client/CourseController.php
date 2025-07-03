<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Course;

class CourseController extends Controller
{
    public function homeCourses()
    {
        $limitCourses = Course::query()
            ->with(['teacher', 'category'])
            ->withCount('enrolledStudents')
            ->take(3)
            ->where('is_published', true)->get();
        return response()->json($limitCourses);
    }

    public function courses() {
        $courses = Course::query()
            ->with(['teacher', 'category'])
            ->withCount('enrolledStudents')
            ->where('is_published', true)
            ->paginate(6);
        return response()->json($courses);
    }

    public function courseDetails(string $slug){
        $course = Course::query()
            ->with(['sections.lessons', 'teacher', 'category'])
            ->withCount('enrolledStudents')
            ->where('slug', $slug)
            ->first();
        return response()->json($course);
    }
}
