<?php

use App\School;
use Illuminate\Database\Seeder;

class SchoolTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return School::create([
            'nama' => 'admin',
            'logo' => '',
            'deskripsi' => 'Lorem Lorem Lorem',
            'alamat' => 'Jl. Tlogo Sari No.641 A, Merjosari, Malang',
            'visi' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit;
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua; 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco ;
            laboris nisi ut aliquip ex ea commodo consequat;
            Duis aute irure dolor in reprehenderit in voluptate velit esse',
            'misi' => 'Sed ut perspiciatis unde omnis iste natus error sit doloremque;
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore; veritatis et quasi architecto beatae vitae dicta sunt explicabo;
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut;
            fugit, sed quia consequuntur magni dolores eos qui ratione',
            'email' => 'sunangiri757@yahoo.com',
            'phone' => '123456789101',
            'faximail' => '34241',
            'facebook' => '',
            'youtube' => '',
            'instagram' => '',
            'tanggal_berdiri' => '2020-01-01',
            'jml_guru' => '0',
            'jml_staf' => '0',
            'jml_murid' => '0'
        ]);
    }
}
