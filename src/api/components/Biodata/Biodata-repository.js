const mongoose = require('mongoose');

const Biodata = mongoose.model('Biodata');

class BiodataRepository {
  async findByNim(nim) {
    return await Biodata.findOne({ nim }).lean();
  }
  async createBiodata(data) {
    const newBiodata = new Biodata(data);
    return await newBiodata.save();
  }
}



module.exports = new BiodataRepository();