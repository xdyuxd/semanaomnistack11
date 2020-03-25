const express = require('express');
const routes = require('./routes');
const cors = require (cors);

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP:
//GET: buscar informação no beck-end
//POST: criar informação no beck-end
//PUT: alterar informação
//DELETE: deletar

//TIpos de PARM:
//Query parms: enviados na rota após o ? (filtros, paginação)
//Route parms: identificar recursos
//Resquest body: corpo da requisição, utilizado para criar e alterar recursos

//BCD SQL: MySQL, SQL Server etc...
//NOSQL: MongoDB, COuchDB etc...
//Driver: SELECT * FROM user
//Query Builder: table('user')

app.listen(3333);