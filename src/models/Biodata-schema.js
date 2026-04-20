const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  
  npm: { 
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
    default: null 
  },
  tempatLahir: { 
    type: String, 
    required: true 
  },
  tanggalLahir: { 
    type: Date, 
    required: true 
  },
  jenisKelamin: { 
    type: String, 
    enum: ['PRIA', 'WANITA'], 
    required: true 
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
    default: null 
  },
  handphone: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },

  dataSekolah: {
    asalSekolah: { 
      type: String, 
      required: true 
    },
    noIjazah: { 
      type: String, 
      required: true 
    },
    tglIjazah: { 
      type: Date, 
      required: true 
    }
  },

  dataOrangTua: {
    namaOrangTua: { 
      type: String, 
      required: true 
    },
    alamat: { 
      type: String, 
      required: true 
    },
    telepon: { 
      type: String, 
      default: null 
    }
  }
}, { 
});
const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;