# API

Criando uma pequena API usando o gerador https://github.com/ribafs/crud-generator-appzcoder com Laravel 9

E consumindo com um pequeno aplicativo em Javascript usando o método fetch().

## Usando

### Back-end

- Acessar a pasta backend
- Criar o banco de dados e configurar no .env
- Executar:

php artisan migrate

php artisan db:seed

php artisan serve

http://localhost:8000/api/customers

Pode gerenciar os dados usando um software como o Insomnia ou Postman

### Front-end

Chame o aplicativo com javascript pelo navegador

http://localhost/api/frontend

Assim verá os 3 registros cadastrados na tabela customers.


