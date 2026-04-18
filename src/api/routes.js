const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');
const kehadiran = require('./components/Kehadiran/kehadiran-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  kalenders(app);
  kehadiran(app);
  return app;
};
