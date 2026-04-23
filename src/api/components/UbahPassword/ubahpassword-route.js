const express = require('express');
const controller = require('./UbahPassword-controller');
const authentication = require('../../middlewares/authentication');

const route = express.Router();

module.exports = (app) => {
  app.use('/ubah-password', route);
  
  route.put('/', authentication, controller.ubahPassword);
};