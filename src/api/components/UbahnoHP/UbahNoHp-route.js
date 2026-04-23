const express = require('express');
const controller = require('./UbahNoHp-controller');
const authentication = require('../../middlewares/authentication');

const route = express.Router();

module.exports = (app) => {
  app.use('/ubah-no-hp', route);

  route.put('/', authentication, controller.ubahNoHp);
};