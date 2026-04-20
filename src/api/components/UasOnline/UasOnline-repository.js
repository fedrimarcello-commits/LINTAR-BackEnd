const mongoose = require('mongoose');
const UasOnline = mongoose.model('UasOnline');
const { Khs } = require('../../../models'); 

class UasOnlineRepository {
  async getJadwalDariKHS(nim, semester_label) {
    return await Khs.find({ nim: nim, semester_label: semester_label }).lean();
  }

  async getSubmissions(nim, semester_label) {
    return await UasOnline.find({ nim, semester_label }).lean();
  }

  async submitJawaban(data) {
    const newSubmission = new UasOnline(data);
    return await newSubmission.save();
  }
}

module.exports = new UasOnlineRepository();