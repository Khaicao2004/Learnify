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

    public function courses()
    {
        $courses = Course::query()
            ->with(['teacher', 'category'])
            ->withCount('enrolledStudents')
            ->where('is_published', true)
            ->paginate(6);
        return response()->json($courses);
    }

    public function courseDetails(string $slug)
    {
        $course = Course::query()
            ->with(['sections.lessons', 'teacher', 'category'])
            ->withCount('enrolledStudents')
            ->where('slug', $slug)
            ->first();
        $user = request()->user();
        $isEnrolled = $user ? $course->enrolledStudents()->where('user_id', $user->id)->exists() : false;
        $course->is_enrolled = $isEnrolled;
        return response()->json($course);
    }

    public function myLearning()
    {
        $myCourses = Course::query()->with(['teacher', 'category', 'enrolledStudents'])
            ->withCount('enrolledStudents')
            ->withCount('sections')
            ->whereHas('enrolledStudents', function ($query) {
                $query->where('user_id', request()->user()->id);
            })
            ->paginate(6);
        return response()->json($myCourses);
    }

    public function myLearningDetails(string $slug)
    {
        $course = Course::query()
            ->with(['sections.lessons', 'teacher', 'category'])
            ->withCount('enrolledStudents')
            ->where('slug', $slug)
            ->first();
        return response()->json($course);
    }

}
