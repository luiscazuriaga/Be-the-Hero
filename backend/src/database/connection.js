
//?este codigo serve para fazer conexões com o knex que configura o banco de dados
//*Forma: aqui nos linkamos o knex e apos isso criamos uma const configuration 
//*para receber o ling do knexfile que é o arquivo js knex que criou o DB 
//*após isto criamos uma const connection que linka o development do knex que esta linkado com a const configuration
//* ao connection assim podemos chamar o connection para utilzar este Dev do knex em outras areas
//TODO Utilização: é utilizado para conseguir fazer comandos ao knex que afetam o banco de dados



const knex = require('knex')
const configuration = require('../../knexfile');

const config =process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;