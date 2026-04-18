const express = require('express');

const users = require('./components/users/users-route');
const auth = require('./components/auth/auth-route');
const khs = require('./components/khs/khs-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  auth(app);
  khs(app);
  return app;
};
