//? demenbramento do index.js
//todo> serve para fazer a funções que podem ser utilizadas no promise do index.js


const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
//?funções que podem ser e algumas são chamadas por exemplo no index.js 
     async index (request,response) {
        
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
},

    
    async create(resquest,response) {

        const {name, email, whatsapp, city, uf} = request.body;
         
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });


        return response.json({id})
    }
    };
