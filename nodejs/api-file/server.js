const express = require('express');
const app = express();
const data = require('./data.json'); // Geralmente se pega os dados de um banco de dados, em nosso caso do data.json

app.use(express.json());

/*
Um resource é um objeto que usa Verbos HTTP para se comunicar com outros objetos
GET - Receber dados de um resource
POST - Enviar dados para serem processados por um resource
PUT - Atualizar dados de um resource
DELETE - Excluir um resource
*/

// http://127.0.0.1:3000/clients = URI
// clients - nome do resource
// Então DELETE exclui um client. Acima troque resource por client

// Resource de clients
// https://jsonplaceholder.typicode.com/users

app.get('/clients', function(req, res){
    res.json(data);
});

app.get("/clients/:id", function(req, res) { // Pesquisar um único id, no show
    const {id} = req.params;
    const client = data.find(cli => cli.id = id);

    if(!client) return res.status(204).json();

    res.json(client);
});

app.post('/clients', function(req, res){ // Passar mais informações para o garçon
    const {name, email} = req.body;

    // Salvar
    res.json({ name, email});
});

app.put('/clients/:id', function(req, res){}); // Atualizar um único id no edit
app.delete('/clients/:id', function(req, res){}); // Remover um único id no edit
// Boa prática não usar barras no final, com /clients/

app.listen(3000, function(){
    console.log('System is running in http://localhost:3000/clients');
});

 
