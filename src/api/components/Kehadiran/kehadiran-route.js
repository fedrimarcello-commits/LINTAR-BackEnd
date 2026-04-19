module.exports = (app) => {
  const controller = require('./kehadiran-controller');
  const authMiddlewares = require('../../middlewares/authentication');

  app.get('/kehadiran', authMiddlewares, controller.getKehadiran);
  app.post('/kehadiran', authMiddlewares, controller.createKehadiran);
};
