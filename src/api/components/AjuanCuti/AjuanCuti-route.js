const express = require('express');

const router = express.Router();
const authentication = require('../../middlewares/authentication');
const db = require('../../../models');

module.exports = () => {
  const controller = require('./ajuancuti-controller')(db);

  router.get('/ajuan-cuti', authentication, controller.getAjuanCuti);
  router.post('/ajuan-cuti', authentication, controller.submitAjuanCuti);

  return router;
};
