//?basicamente aqui esta o backend do site, porem existem varias ramificações linkadas a esta
//? que de fato formam todo o backend...como outras configs que não necessariamente estão
//?linkadas, porem são utilizadas para o funcionamento de um todo

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
* Rota / Recurso
*/
/*
* Metodos HTTP
?-GET: Busca/Listar uma informação do back-end
?-POST: Criar uma informação no back-end
?-PUT: Alterar uma informação no back-end
?-DELETE: Deletar informações no back-end
*/
/*
*TIPOS DE PARAMENTROS
?-
?-Query parasm: parametros nomeados enviados na rota apôs *?* (filtros,paginação)
?-Route parasm: paramentros utilizados para indentificar recursos (ex:/users/:id para buscar o usuario pelo Id)
?-Request Body: corpo da requisição utilizado para criar ou alterar RECURSOS
*/
