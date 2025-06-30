<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\User;

class TeacherController extends Controller
{
    public function homeTeachers()
    {
        $teachers = User::query()->where('role', 'teacher')->get();
        return response()->json($teachers);
    }
}
