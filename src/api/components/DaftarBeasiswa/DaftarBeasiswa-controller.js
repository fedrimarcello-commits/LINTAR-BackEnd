const beasiswaService = require('./DaftarBeasiswa-service');

const ajukanBeasiswa = async (req, res) => {
    try {
        const dataPendaftaran = {
            ...req.body,
            nim: req.userData.nim 
        };
        const result = await beasiswaService.daftarBeasiswa(dataPendaftaran);
        
        res.status(200).json({
            success: true,
            message: 'Pendaftaran beasiswa berhasil diajukan',
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


const lihatHasil = async (req, res) => {
    try {
        const nimUser = req.userData.nim; 

        const result = await beasiswaService.getPendaftaran(nimUser);
        
        res.status(200).json({
            success: true,
            message: 'Berhasil mengambil hasil pendaftaran beasiswa',
            data: result
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    ajukanBeasiswa,
    lihatHasil
};