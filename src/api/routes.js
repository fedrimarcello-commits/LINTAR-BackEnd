const express = require('express');

const users = require('./components/users/users-route');
const historiNilai = require('./components/HistoriNilai/HistoriNilai-route');
const jadwalKuliah = require('./components/JadwalKuliah/JadwalKuliah-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  historiNilai(app);
  jadwalKuliah(app);

  return app;
};
