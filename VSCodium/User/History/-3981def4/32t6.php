<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $laptops = Category::factory()->create([
            'name' => "Ноутбуки",
            'description' => "Ноутбуки для работы и уёбы",
            'parent_id' => null,
        ]);

        $smartphones = Category::factory()->create([
            'name' => "Смартфоны",
            'description' => "Современные мобильные телефоны и аксессуары",
            'parent_id' => null,
        ]);

        $tablets = Category::factory()->create([
            'name' => "Планшеты",
            'description' => "Планшетные компьютеры и аксессуары",
            'parent_id' => null,
        ]);
        
        $headphones = Category::factory()->create([
            'name' => "Наушники",
            'description' => "Различные типы наушников для прослушивания музыки",
            'parent_id' => null,
        ]);

        $televisions = Category::factory()->create([
            'name' => "Телевизоры",
            'description' => "Современные телевизоры и домашние кинотеатры",
            'parent_id' => null,
        ]);

        $accessories = Category::factory()->create([
            'name' => "Аксессуары",
            'description' => "Аксессуары для электроники",
            'parent_id' => null,
        ]);
        
        
        Category::factory()->create([
            'name' => "Android",
            'description' => "Смартфоны на базе ОС Android",
            'parent_id' => $smartphones->id,
        ]);

        Category::factory()->create([
            'name' => "iOS",
            'description' => "Смартфоны на базе iOS",
            'parent_id' => $smartphones->id,
        ]);
        
        Category::factory()->create([
            'name' => "Беспроводные",
            'description' => "Беспроводные наушники",
            'parent_id' => $headphones->id,
        ]);

        Category::factory()->create([
            'name' => "Проводные",
            'description' => "Проводные наушники",
            'parent_id' => $headphones->id,
        ]);

        Category::factory()->create([
            'name' => "Кейсы и чехлы",
            'description' => "Аксессуары для планшетов и смартфонов",
            'parent_id' => $accessories->id,
        ]);

        Product::factory()->create([
            'name' => "iPhone 15 Pro",
            'is_available' => true,
            'price' => 3000.00,
            'rating' => 4.5,
        ]);
    }
}
