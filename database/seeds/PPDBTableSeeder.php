<?php

use App\PPDB;
use Illuminate\Database\Seeder;

class PPDBTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return PPDB::create([
            'school_id' => '1',
            'tanggal_buka' => '2020-01-01',
            'tanggal_tutup'=> '2020-01-30',
        ]);
    }
}
