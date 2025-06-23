<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(4),
            'thumbnail' => 'https://img.freepik.com/premium-vector/vector-illustration-about-concept-online-education-distance-education-training-courses_675567-6279.jpg',
            'description' => $this->faker->paragraph(),
            'is_published' => true,
        ];
    }
}
