const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');
const kehadiran = require('./components/Kehadiran/kehadiran-route');
const auth = require('./components/auth/auth-route');
const historiNilai = require('./components/HistoriNilai/HistoriNilai-route');
const jadwalKuliah = require('./components/JadwalKuliah/JadwalKuliah-route');

module.exports = () => {
  const app = express.Router();

  historiNilai(app);
  jadwalKuliah(app);
  users(app);
  kalenders(app);
  kehadiran(app);
  auth(app);


  return app;
};
