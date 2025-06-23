<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Enrollment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EnrollmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = User::query()->where('role', 'student')->get();
        $courses = Course::all();

        foreach ($students as $student) {
            $studentCourses = $courses->random(2);

            foreach($studentCourses as $course){
                Enrollment::query()->create([
                    'user_id' => $student->id,
                    'course_id' => $course->id,
                    'enrolled_at' => now()->subDays(rand(1, 30)),
                ]);
            }
        }
    }
}
