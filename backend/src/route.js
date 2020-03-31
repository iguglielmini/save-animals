const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngController = require('./controllers/OngControllers');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionControllers');
const IncidentsController = require('./controllers/IncidentControllers');
const routes = express.Router();


//Login
routes.post('/sessions', SessionController.create);
//Ongs
routes.get('/ongs',OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);
//Perfil
routes.get('/profile', ProfileController.index);
//Incidentes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;