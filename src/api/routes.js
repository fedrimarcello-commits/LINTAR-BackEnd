const express = require('express');

const auth = require('./components/auth/auth-route');
const users = require('./components/users/users-route');
const historiNilai = require('./components/HistoriNilai/HistoriNilai-route');
const jadwalKuliah = require('./components/JadwalKuliah/JadwalKuliah-route');
const ajuanCuti = require('./components/AjuanCuti/AjuanCuti-route');
const biodata = require('./components/Biodata/Biodata-route');

module.exports = () => {
  const app = express.Router();

  auth(app);
  users(app);
  historiNilai(app);
  jadwalKuliah(app);
  app.use(ajuanCuti());
  app.use(biodata());

  return app;
};
