<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = ['Programming', 'Design', 'Marketing'];
        foreach($categories as $category){
            Category::query()->create([
                'name' => $category,
                'slug' => Str::slug($category),
                'description' => fake()->paragraph()
            ]);
        }
    }
}
