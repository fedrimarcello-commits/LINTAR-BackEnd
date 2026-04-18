const historiNilaiController = require('./HistoriNilai-controller');

module.exports = (router) => {
  router.get('/histori-nilai', historiNilaiController.getAll);
  router.get('/histori-nilai/:nim', historiNilaiController.getByNim);
};
