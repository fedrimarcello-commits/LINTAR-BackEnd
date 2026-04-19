const express = require('express');
const beasiswaController = require('./DaftarBeasiswa-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/beasiswa', route);

  route.post('/daftar', beasiswaController.ajukanBeasiswa);

};