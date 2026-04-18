const jadwalKuliahController = require('./JadwalKuliah-controller');

module.exports = (router) => {
  router.get('/jadwal-kuliah', jadwalKuliahController.getAll);
  router.get('/jadwal-kuliah/:nim', jadwalKuliahController.getByNim);
};
