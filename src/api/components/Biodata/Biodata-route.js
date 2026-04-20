const express = require('express');

const router = express.Router();
const authentication = require('../../middlewares/authentication');
const db = require('../../../models');

module.exports = (db) => {
  const controller = require('./biodata-controller')(db);

  router.get('/biodata', authentication, controller.getBiodata);

  return router;
};
