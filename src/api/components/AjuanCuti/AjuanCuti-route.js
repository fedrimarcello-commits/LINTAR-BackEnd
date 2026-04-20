const express = require('express');

const router = express.Router();
const authentication = require('../../middlewares/authentication');
const ajuanCutiController = require('./AjuanCuti-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/ajuan-cuti', route);

  route.get('/', authentication, ajuanCutiController.getAjuanCuti);
  route.post('/', authentication, ajuanCutiController.submitAjuanCuti);

  return router;
};
