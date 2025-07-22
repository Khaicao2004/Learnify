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
            'video_path' => 'https://www.youtube.com/embed/CPbCsL_Ge4g?si=78yrbJzRj7EXqvBl',
            'duration' => $this->faker->numberBetween(20, 30),
            'content' => $this->faker->paragraph(),
            'sort_order' => $this->faker->numberBetween(1, 10)
        ];
    }
}
