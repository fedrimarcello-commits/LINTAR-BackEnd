const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');
const kehadiran = require('./components/Kehadiran/kehadiran-route');
const auth = require('./components/auth/auth-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  kalenders(app);
  kehadiran(app);
  auth(app);

  return app;
};
