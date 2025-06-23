<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'video_path' => 'https://www.youtube.com/watch?v=IYerLGVTEcM&list=RDIYerLGVTEcM&start_radio=1',
            'content' => $this->faker->paragraph(),
            'sort_order' => $this->faker->numberBetween(1, 10)
        ];
    }
}
