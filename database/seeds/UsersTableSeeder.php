<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return User::create([
            'name' => 'admin',
            'email' => 'admin@smpsunangiri.sch.id',
            'password' => bcrypt('admin1234'),
            'dateBorn' => '2000-01-01',
            'address' => 'SMP Sunan Giri',
            'phone' => '080123456789',
            
        ]);
    }
}
