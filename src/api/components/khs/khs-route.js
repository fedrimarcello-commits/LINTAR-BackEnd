const express = require('express');
const khsController = require('./khs-controller');
const authentication = require('../../middlewares/authentication'); 

const route = express.Router();

module.exports = (app) => {
  app.use('/NilaiKHS', route);
  
  route.get('/', authentication, khsController.getNilaiKHS);
};