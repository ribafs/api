# Ferramentas especializadas para trabalhar com API

	- Extensões - RESTClient para o Firefox
	- Insomnia Core - https://insomnia.rest/ (desktop)
	- Postman - https://www.postman.com/ (desktop)


Gerenciando um CRUD de API no Postman:
GET, GET(id), POST, PUT(id), DELETE(id)

== Recebendo todos os registros com GET

Método - GET

url - http://localhost:8000/api/authors

Clicar em SEND


== Recebendo apenas um único registro com GET

Método - GET

url - http://localhost:8000/api/authors/2

Clicar em SEND


== Atualizando um registro com PUT

Olhando para o router, vi que PUT espera um id

Para alterar o name do registro com id=2 para Elias, fiz assim:

Método - PUT

url - http://localhost:8000/api/authors/2

Crio um Query Param assim:

KEY           VALUE
name          Elias

== Após clicar no SEND não aparece erro e a url fica assim:

http://localhost:8000/api/authors/2?name=Elias

Ao chamar com GET ele me mostra o registro alterado
De forma semelhante no navegador aperecem os registros, inclusive o com id=2 alterado
http://localhost:8000/api/authors

== Inserindo registro com POST

Método - POST

url - http://localhost:8000/api/authors

Crio Query Params assim:

KEY           VALUE
name         Tiago EF
email       tiago@tiago.br
github      tiago
twitter     tiago
location    Fortaleza
latest_article_published  2020-06-17

Clico em SEND

Sem error e ao chamar GET com a url

http://localhost:8000/api/authors

Ou pelo navegador
http://localhost:8000/api/authors

Posso ver o novo registro inserido

== Excluindo um registro com DELETE, registro com id=2

Método - DELETE

url - http://localhost:8000/api/authors/2

Clicar em SEND

https://www.youtube.com/watch?v=1YT3DnbirKg


Algumas dicas de curl

curl -i http://localhost:8080/api/products

Queremos os detelhes do cliente 'jim', então vamos executar uma requisição GET para a URL deste recurso: 
curl -v http://localhost:80/clients/jim

Para criar um novo cliente, chamado Paul...	
curl -v -X PUT http://localhost:80/clients/paul -d '{"address":"Sunset Boulevard" }

Criar um produto usando POST
curl -X POST -i http://localhost:1338/produtos --data '{
  "nome": "Groselha",
  "preco": 1,
  "descricao": "Groselha prata",
}'

Seguindo, podemos obter as informações de todos os clientes de uma vez:	
curl -v http://localhost:80/clients/

para deletar um cliente:
curl -v -X DELETE http://localhost:80/clients/anne

curl -X DELETE http://<unique-to-you>.cloudwaysapps.com/api/v1/car/1

/ping: An API's "Hello World"
routes/web.php:
$router->get('/ping', function () {
return response()->json(['ack' => time()]);
});
$ curl -i http://localhost:8888/ping



