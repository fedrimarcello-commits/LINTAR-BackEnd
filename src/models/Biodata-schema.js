const mongoose = require('mongoose');

const biodataSchema = new mongoose.Schema({
  nim: {
    type: String,
    required: true,
    unique: true
  },
  namaMahasiswa: {
    type: String,
    required: true
  },
  noRekening: {
    type: String,
    default: ''
  },
  tempatTanggalLahir: {
    type: String,
    required: true
  },
  jenisKelamin: {
    type: String,
    required: true,
    enum: ['PRIA', 'WANITA']
  },
  agama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  telepon: {
    type: String,
    default: '-'
  },
  handphone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  asalSekolah: {
    type: String,
    required: true
  },
  noIjazah: {
    type: String,
    required: true
  },
  tglIjazah: {
    type: String,
    required: true
  },
  namaOrangTuaWali: {
    type: String,
    required: true
  },
  alamatOrangTua: {
    type: String,
    required: true
  },
  teleponOrangTua: {
    type: String,
    default: '-'
  }
});

const Biodata = mongoose.model('Biodata', biodataSchema);
module.exports = Biodata;