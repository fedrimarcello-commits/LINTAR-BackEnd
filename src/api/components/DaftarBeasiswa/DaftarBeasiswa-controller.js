const beasiswaService = require('./DaftarBeasiswa-service');

const ajukanBeasiswa = async (req, res) => {
    try {
        const result = await beasiswaService.daftarBeasiswa(req.body);
        
        res.status(201).json({
            success: true,
            message: 'Pendaftaran beasiswa berhasil diajukan',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const lihatDaftarBeasiswa = async (req, res) => {
    try {
        const result = await beasiswaService.getAllPendaftaran();
        
        res.status(200).json({
            success: true,
            message: 'Berhasil mengambil data pendaftaran beasiswa',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan pada server'
        });
    }
};

module.exports = {
    ajukanBeasiswa,
    lihatDaftarBeasiswa
};