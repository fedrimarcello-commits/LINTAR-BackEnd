const jadwalKuliahController = require('./JadwalKuliah-controller');
const { authentication } = require('../../middlewares');

module.exports = (router) => {
  router.get('/jadwal-kuliah', authentication, jadwalKuliahController.getByNim);
};
