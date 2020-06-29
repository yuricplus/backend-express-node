const express = require('express');

const OngConroller = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const SpotiFyController = require('./controllers/ApiSpotifyRestFull');
const ListToDoController = require('./controllers/ListToDoController');

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngConroller.index);
routes.post('/ongs', OngConroller.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/spotify', SpotiFyController.index)

routes.post('/create-list-to-do', ListToDoController.create)
routes.get('/list-to-do', ListToDoController.index)
routes.delete('/delete-list/:id', ListToDoController.delete)


module.exports = routes;