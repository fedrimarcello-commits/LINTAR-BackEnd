const service = require('./kehadiran-service');

module.exports = {
  getKehadiran: async (req, res, next) => {
    try {
      const { nim } = req.params; // ✅ ambil NIM dari URL

      const data = await service.getKehadiran(nim);

      res.json({
        message: 'Data Kehadiran',
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  createKehadiran: async (req, res, next) => {
    try {
      const data = await service.createKehadiran(req.body);

      res.json({
        message: 'Berhasil tambah kehadiran',
        data,
      });
    } catch (err) {
      next(err);
    }
  },
};
