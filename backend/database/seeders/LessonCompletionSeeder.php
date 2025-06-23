<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\LessonCompletion;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonCompletionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $students = User::where('role', 'student')->get();
        $lessons = Lesson::all();

        foreach ($students as $student) {
            $completedLessons = $lessons->random(5);

            foreach ($completedLessons as $lesson) {
                LessonCompletion::updateOrCreate([
                    'user_id' => $student->id,
                    'lesson_id' => $lesson->id,
                ], [
                    'status' => 'completed',
                    'completed_at' => now()->subDays(rand(1, 10)),
                ]);
            }
        }
    }
}
