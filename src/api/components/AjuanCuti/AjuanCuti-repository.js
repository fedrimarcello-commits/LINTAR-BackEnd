const mongoose = require('mongoose');

const AjuanCuti = mongoose.model('AjuanCuti');
const Biodata = mongoose.model('Biodata');

class AjuanCutiRepository {
  async findByNim(nim) {
    const ajuanCuti = await AjuanCuti.findOne({ nim }).lean();
    const biodata = await Biodata.findOne({ nim }).lean();
    return { ajuanCuti, biodata };
  }

  async findBiodataByNim(nim) {
    return await Biodata.findOne({ nim }).lean();
  }

  async create(data) {
    const ajuan = new AjuanCuti(data);
    return await ajuan.save();
  }

  async updateByNim(nim, data) {
    return await AjuanCuti.findOneAndUpdate({ nim }, data, {
      new: true,
      upsert: true,
    });
  }

  async addPengajuan(nim, pengajuanData) {
    return await AjuanCuti.findOneAndUpdate(
      { nim },
      { $push: { daftarPengajuan: pengajuanData } },
      { new: true, upsert: true }
    );
  }
}

module.exports = new AjuanCutiRepository();
