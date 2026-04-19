module.exports = (db) => {
  const repository = require('./biodata-repository')(db);

  return {
    getBiodataByNim: async (nim) => {
      const biodata = await repository.findByNim(nim);
      if (!biodata) {
        throw new Error('Data biodata tidak ditemukan');
      }
      return biodata;
    },
  };
};
