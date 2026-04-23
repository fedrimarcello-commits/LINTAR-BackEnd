const express = require('express');
const authentication = require('../../middlewares/authentication');
const biodataController = require('./Biodata-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/biodata', route);

  route.get('/', authentication, biodataController.getBiodata);

  route.post('/', authentication, biodataController.createBiodata);
};