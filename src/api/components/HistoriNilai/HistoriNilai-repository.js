const mongoose = require('mongoose');

const HistoriNilai = mongoose.model('HistoriNilai');

class HistoriNilaiRepository {
  async getAll() {
    return await HistoriNilai.find().lean();
  }

  async getByNim(nim) {
    return await HistoriNilai.find({ nim }).lean();
  }
}

module.exports = new HistoriNilaiRepository();
