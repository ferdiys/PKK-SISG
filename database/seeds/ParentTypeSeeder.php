<?php

use Illuminate\Database\Seeder;
use App\Parenttype;

class ParentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get(database_path('json/ParentType.json'));
        $data = collect(json_decode($json));
        foreach ($data as $d) {
            $d = collect($d)->toArray();
            $p = new Parenttype();
            $p->fill($d);
            $p->save();
        }
    }
}
