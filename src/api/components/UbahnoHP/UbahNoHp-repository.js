const mongoose = require('mongoose');
const Biodata = mongoose.model('Biodata');

class UbahNoHpRepository {
  async updateHandphone(nim, noHpBaru) {
    return await Biodata.updateOne(
      { nim: nim },
      { $set: { handphone: noHpBaru } }
    );
  }
}

module.exports = new UbahNoHpRepository();