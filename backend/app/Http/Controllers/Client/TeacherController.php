<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\User;

class TeacherController extends Controller
{
    public function homeTeachers()
    {
        $limitTeachers = User::query()
            ->where('role', 'teacher')
            ->take(3)
            ->get();
        return response()->json($limitTeachers);
    }

    public function teachers()
    {
        $teachers = User::query()
            ->where('role', 'teacher')
            ->paginate(6);
        return response()->json($teachers);
    }
}
