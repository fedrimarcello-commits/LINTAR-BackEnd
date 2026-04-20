module.exports = (app) => {
  const controller = require('./dispensasi-controller');
  const authMiddlewares = require('../../middlewares/authentication');

  app.get('/dispensasi', authMiddlewares, controller.getDispensasi);
  app.post('/dispensasi', authMiddlewares, controller.createDispensasi);
};
