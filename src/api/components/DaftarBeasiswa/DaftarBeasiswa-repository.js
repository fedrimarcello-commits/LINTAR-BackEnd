const mongoose = require('mongoose');

const DaftarBeasiswa = mongoose.model('DaftarBeasiswa');

class DaftarBeasiswaRepository {
  async createPendaftaran(data) {
    const newPendaftaran = new DaftarBeasiswa(data);
    return await newPendaftaran.save();
  }

  async findPendaftaranByNim(nim) {
    return await DaftarBeasiswa.findOne({ nim }).lean();
  }

}

module.exports = new DaftarBeasiswaRepository();