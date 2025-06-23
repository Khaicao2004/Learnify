<?php

namespace Database\Seeders;

use App\Models\Lesson;
use App\Models\Section;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sections = Section::all();

        foreach ($sections as $section) {
            Lesson::factory()->count(3)->create([
                'section_id' => $section->id
            ]);
        }
    }
}
