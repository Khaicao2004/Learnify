<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teachers = User::query()->where('role', 'teacher')->get();
        $categories = Category::all();

        foreach($teachers as $teacher){
            Course::factory()->count(2)->create([
                'teacher_id' => $teacher->id,
                'category_id' => $categories->random()->id,
            ]);
        }
    }
}
