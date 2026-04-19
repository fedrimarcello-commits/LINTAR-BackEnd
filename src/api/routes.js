const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');
const kehadiran = require('./components/Kehadiran/kehadiran-route');
const auth = require('./components/auth/auth-route');
const khs = require('./components/khs/khs-route');
const historiNilai = require('./components/HistoriNilai/HistoriNilai-route');
const jadwalKuliah = require('./components/JadwalKuliah/JadwalKuliah-route');
const uts = require('./components/uts/uts-route')
const beasiswa = require('./components/DaftarBeasiswa/DaftarBeasiswa-route');
const UasOnline = require('./components/UasOnline/UasOnline-route');

module.exports = () => {
  const app = express.Router();

  historiNilai(app);
  jadwalKuliah(app);
  users(app);
  kalenders(app);
  kehadiran(app);
  auth(app);
  khs(app);
  uts(app);
  beasiswa(app);
  UasOnline(app);
  return app;
};
