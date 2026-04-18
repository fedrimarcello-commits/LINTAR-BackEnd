const service = require('./kehadiran-service');

module.exports = {
  getKehadiran: async (req, res, next) => {
    try {
      const nim = req.userData?.nim;

      if (!nim) {
        return res.status(401).json({
          message: 'Unauthorized: userData tidak ditemukan',
        });
      }

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
      const nim = req.userData?.nim;

      if (!nim) {
        return res.status(401).json({
          message: 'Unauthorized: userData tidak ditemukan',
        });
      }

      const payload = {
        ...req.body,
        nim,
      };

      const data = await service.createKehadiran(payload);

      res.json({
        message: 'Berhasil tambah kehadiran',
        data,
      });
    } catch (err) {
      next(err);
    }
  },
};
