const express = require('express');
const uasController = require('./UasOnline-controller');
const authentication = require('../../middlewares/authentication'); 

const route = express.Router();

module.exports = (app) => {
  app.use('/uas-online', route);

  route.get('/jadwal', authentication, uasController.lihatJadwalUas);
  route.post('/submit', authentication, uasController.kumpulkanUas);
};