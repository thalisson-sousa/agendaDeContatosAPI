const express = require('express');
const routes = express.Router();
const controller = require('../controller/index');

routes.get('/contatos', controller.getContatos);
routes.get('/contato/:id', controller.getContato);
routes.post('/newcontato', controller.createContato);
routes.put('/contato/:id', controller.updateContato);
routes.delete('/contato/:id', controller.deleteContato);

module.exports = routes;