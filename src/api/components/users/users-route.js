const express = require('express');

const usersController = require('./users-controller');

const authentication = require('../../middlewares/authentication');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);
  
  route.get('/', usersController.getUsers);

  route.post('/', usersController.createUser);
  
  route.get('/:id', usersController.getUser);

  route.put('/chg', authentication,  usersController.updateUser);

  route.delete('/del', authentication, usersController.deleteUser);
};
