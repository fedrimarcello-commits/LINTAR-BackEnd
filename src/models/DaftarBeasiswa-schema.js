const mongoose = require('mongoose');

const daftarBeasiswaSchema = new mongoose.Schema({
    nim: { 
        type: String, 
        required: true,
        unique: true
    },
    statusMahasiswa: { 
        type: String, 
        enum: ['Aktif', 'Cuti', 'Lulus'], 
        required: true 
    },
    semesterAktif: { 
        type: Number, 
        required: true 
    },
    ipk: { 
        type: Number, 
        required: true 
    },

    terimaBeasiswaLain: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    statusPendaftaran: {
        type: String,
        enum: ['Menunggu', 'Disetujui', 'Ditolak'],
        default: 'Menunggu'
    }
}, );

module.exports = mongoose.model('DaftarBeasiswa', daftarBeasiswaSchema);