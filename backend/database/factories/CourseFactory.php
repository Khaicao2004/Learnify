<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
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
        $level = ['beginner', 'intermediate', 'advanced'];
        return [
            'title' => $title = $this->faker->sentence(4),
            'slug' => Str::slug($title) . '-' . Str::random(5),
            'level' => $this->faker->randomElement($level),
            'duration' => $this->faker->numberBetween(120, 250),
            'price' => $this->faker->numberBetween(100, 200),
            'thumbnail' => 'https://oes.vn/wp-content/uploads/2024/07/Training-course-la-gi-Kham-pha-12-loai-chuong-trinh-dao-tao-nhan-vien-hieu-qua.png',
            'description' => $this->faker->paragraph(),
            'requirements' => $this->faker->paragraph(),
            'is_published' => true,
        ];
    }
}
