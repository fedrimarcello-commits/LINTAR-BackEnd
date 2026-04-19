module.exports = (app) => {
  const controller = require('./dispensasi-controller');

  app.get('/dispensasi/:nim', controller.getDispensasi);
  app.post('/dispensasi/:nim', controller.createDispensasi);
};
