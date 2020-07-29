<?php

use App\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get(database_path('json/Category.json'));
        $data = collect(json_decode($json));
        foreach ($data as $d) {
            $d = collect($d)->toArray();
            $c = new Category();
            $c->fill($d);
            $c->save();
        }
    }
}
