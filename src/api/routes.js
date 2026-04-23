const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');
const kehadiran = require('./components/Kehadiran/kehadiran-route');
const auth = require('./components/auth/auth-route');
const dispensasi = require('./components/Dispensasi/dispensasi-route');
const khs = require('./components/khs/khs-route');
const historiNilai = require('./components/HistoriNilai/HistoriNilai-route');
const jadwalKuliah = require('./components/JadwalKuliah/JadwalKuliah-route');
const ajuanCuti = require('./components/AjuanCuti/AjuanCuti-route');
const biodata = require('./components/Biodata/Biodata-route');
const uts = require('./components/uts/uts-route');
const beasiswa = require('./components/DaftarBeasiswa/DaftarBeasiswa-route');
const ubahPassword = require('./components/UbahPassword/UbahPassword-route');
const ubahNoHp = require('./components/UbahNoHp/UbahNoHp-route');
module.exports = () => {
  const app = express.Router();

  historiNilai(app);
  jadwalKuliah(app);
  ajuanCuti(app);
  biodata(app);
  users(app);
  kalenders(app);
  kehadiran(app);
  auth(app);
  dispensasi(app);
  khs(app);
  uts(app);
  beasiswa(app);
  ubahPassword(app);
  ubahNoHp(app);
  return app;
};