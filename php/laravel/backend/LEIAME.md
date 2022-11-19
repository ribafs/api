# Backend da API

Migration

    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->notNullable();
            $table->string('email')->nullable();
            $table->timestamps();
        });
    }


php artisan serve

http://127.0.0.1:8000/api/customers

Com o Insomnia, inserir registro

JSON

POST 

{
	"name": "Ribamar FS",
	"email": "ribafs@gmail.com"
}

{
	"name": "Elias",
	"email": "elias@gmail.com"
}


Instalar

composer require orangehill/iseed

Fazer backup dos dados

php artisan iseed customers


Recuperando os dados do seed para a tabela

php artisan db:seed




