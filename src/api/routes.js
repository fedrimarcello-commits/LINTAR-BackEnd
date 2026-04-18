const express = require('express');

const users = require('./components/users/users-route');
const historiNilai = require('./components/users/HistoriNilai/HistoriNilai-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  historiNilai(app);

  return app;
};
