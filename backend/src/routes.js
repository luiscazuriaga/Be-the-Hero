//?aqui ficam as rotas para serem utilizadas em outra parte do codigo

const express = require('express');
const {celebrate,Segments,Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileCotroller');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//            LOGIN
routes.post('/sessions',celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}) ,SessionController.create)


routes.get('/ongs', OngController.index);

//          CREATE AN ON
// 55 13 9 8109-9128
routes.post('/ongs',celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(13),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
   })
}), OngController.create);

//            PROFILE
routes.get('/profile', celebrate({
   [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
 }).unknown(),    

}),ProfileController.index);


//         CORRECT PAGE
routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
       page: Joi.number(),   
    }),
}), IncidentController.index);


//            CREATE AN INCIDENT
routes.post('/incidents',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description:Joi.string().required(),   
        value:Joi.number(),   
    }),
}
),IncidentController.create);


//    CORRECT ID FOR DELETE AN INCIDENT
routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}),IncidentController.delete)       

    module.exports = routes;