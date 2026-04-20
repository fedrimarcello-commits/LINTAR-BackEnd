const mongoose = require('mongoose');

const Biodata = mongoose.model('Biodata');

class BiodataRepository {
  async findByNim(nim) {
    return await Biodata.findOne({ nim }).lean();
  }
}

module.exports = new BiodataRepository();