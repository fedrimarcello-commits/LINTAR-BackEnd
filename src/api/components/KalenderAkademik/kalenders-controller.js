const service = require('./kalenders-service');

module.exports = {
  getKalender: async (req, res, next) => {
    try {
      const data = await service.getKalender();

      res.json({
        message: 'Kalender Akademik',
        data,
      });
    } catch (err) {
      next(err);
    }
  },
};
