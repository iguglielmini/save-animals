const express = require('express');
const OngController = require('./controllers/OngControllers');
const IncidentsController = require('./controllers/IncidentControllers');
const ProfileController = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionControllers');
const routes = express.Router();


//Login
routes.post('/sessions', SessionController.create);

//Ongs
routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);
//Perfil
routes.get('/profile', ProfileController.index);
//Incidentes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;