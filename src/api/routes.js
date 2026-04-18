const express = require('express');

const users = require('./components/users/users-route');
const kalenders = require('./components/KalenderAkademik/kalenders-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  kalenders(app);
  return app;
};
