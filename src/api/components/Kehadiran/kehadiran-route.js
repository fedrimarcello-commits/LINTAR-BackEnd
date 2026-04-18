module.exports = (app) => {
  const controller = require('./kehadiran-controller');

  app.get('/kehadiran/:nim', controller.getKehadiran);
  app.post('/kehadiran/:nim', controller.createKehadiran);
};
