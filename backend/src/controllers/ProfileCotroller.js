const connection = require('../database/connection');

module.exports = {
 
  async index(request,response){   

    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
    .where('ong_id',ong_id)
    .select('*')
try{
    return response.json(incidents);}
    catch{
      return (error , console.log(error))
    }
  },



};