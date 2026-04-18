const mongoose = require('mongoose');

const JadwalKuliah = mongoose.model('JadwalKuliah');

class JadwalKuliahRepository {
  async getAll() {
    return await JadwalKuliah.find().lean();
  }

  async getByNim(nim) {
    return await JadwalKuliah.find({ nim }).lean();
  }
}

module.exports = new JadwalKuliahRepository();
