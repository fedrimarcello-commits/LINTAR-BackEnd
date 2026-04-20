const mongoose = require('mongoose');

module.exports = (db) => {
  const BiodataModel = mongoose.model('Biodata');

  return {
    findByNim: async (nim) => await BiodataModel.findOne({ nim }),
    create: async (data) => {
      const biodata = new BiodataModel(data);
      return await biodata.save();
    },
    updateByNim: async (nim, data) =>
      await BiodataModel.findOneAndUpdate({ nim }, data, { new: true }),
  };
};
