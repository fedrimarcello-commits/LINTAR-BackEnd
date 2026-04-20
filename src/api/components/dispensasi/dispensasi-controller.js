const service = require('./dispensasi-service');

module.exports = {
  getDispensasi: async (req, res, next) => {
    try {
      const { nim } = req.user;

      const data = await service.getDispensasi(nim);

      res.json({
        message: 'Data Dispensasi',
        data,
      });
    } catch (err) {
      next(err);
    }
  },

  createDispensasi: async (req, res, next) => {
    try {
      const { nim } = req.user;

      const data = await service.createDispensasi({
        ...req.body,
        nim,
      });

      res.json({
        message: 'Berhasil pengajuan dispensasi',
        data,
      });
    } catch (err) {
      next(err);
    }
  },
};
