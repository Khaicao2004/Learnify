<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'phone_number' => '012345678',
            'address' => 'Ha Noi',
            'avatar' => 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/12/27/b6b0b4c6-e266-487b-bf65-bf519c674e81.jpg',
            'bio' => 'Admin',
            'password' => Hash::make('12345678'),
            'role' => 'admin'
        ]);

        User::factory()->count(3)->create(['role' => 'teacher']);
        User::factory()->count(10)->create(['role' => 'student']);
    }
}
