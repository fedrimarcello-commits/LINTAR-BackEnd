module.exports = (app) => {
  const controller = require('./dispensasi-controller');
  const auth = require('../../middlewares/auth-middleware');

  app.get('/dispensasi', auth, controller.getDispensasi);
  app.post('/dispensasi', auth, controller.createDispensasi);
};
