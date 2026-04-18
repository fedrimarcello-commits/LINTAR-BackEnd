module.exports = (app) => {
  const controller = require('./kalenders-controller');

  app.get('/kalenders', controller.getKalender);
};
