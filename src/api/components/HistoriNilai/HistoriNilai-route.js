const historiNilaiController = require('./HistoriNilai-controller');
const { authentication } = require('../../middlewares');

module.exports = (router) => {
  router.get('/histori-nilai', authentication, historiNilaiController.getByNim);
};