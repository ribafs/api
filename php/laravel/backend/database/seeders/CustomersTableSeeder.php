<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CustomersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('customers')->delete();
        
        \DB::table('customers')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'Ribamar FS',
                'email' => 'ribafs@gmail.com',
                'created_at' => '2022-11-16 17:29:05',
                'updated_at' => '2022-11-16 17:29:05',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'Elias',
                'email' => 'elias@gmail.com',
                'created_at' => '2022-11-16 17:36:09',
                'updated_at' => '2022-11-16 17:36:09',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'Tiago EF',
                'email' => 'tiago@gmail.com',
                'created_at' => '2022-11-17 10:56:19',
                'updated_at' => '2022-11-17 10:56:19',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'Fátima EF',
                'email' => 'fatima@gmail.com',
                'created_at' => '2022-11-17 12:25:28',
                'updated_at' => '2022-11-17 12:25:28',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'Rex EF',
                'email' => 'rex@gmail.com',
                'created_at' => '2022-11-17 12:35:06',
                'updated_at' => '2022-11-17 12:35:06',
            ),
        ));
        
        
    }
}