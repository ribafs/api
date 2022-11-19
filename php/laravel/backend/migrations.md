# Migrations on Laravel 9

## Create

php artisan make:migration create_customers_table

Edite e ajsute

```php
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->notNullable();
            $table->text('email')->nullable();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    public function down()
    {
        Schema::drop('customers');
    }
}
```

## Create table

php artisan migrate


## Fake data

php artisan make:seeder CustomersSeeder

Change database/seeders/CustomersSeeder.php to
```php
<?php
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CustomersSeeder extends Seeder
{
    public function run()
    {
          for($count=0;$count<10;$count++){
            DB::table('customers')->insert([
                'name' => Str::random(15),
                'email' => Str::random(10).'@gmail.com',
                'updated_at' => date("Y-m-d H:i:s"),
                'created_at' => date("Y-m-d H:i:s")                
            ]);
        }
    }
}
```

## DatabaseSeeder

Edit database/seeds/DatabaseSeeder.php 
```php
class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(CustomersSeeder::class);
    }
}
```

## Populate table

php artisan db:seed --class=CustomersSeeder

Create 10 registers

Or:

php artisan migrate:fresh --seed


## Try

php artisan serve

http://127.0.0.1:8000/api/customers/

Or to get only first register

http://127.0.0.1:8000/api/customers/1

Use Insomnia to try the API or Postman


