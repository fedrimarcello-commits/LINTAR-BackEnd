const nilaiUtsService = require('./uts-service');

const getNilaiUts = async (req, res) => {
    try {
        const nim = req.userData.nim;

        const { tahunAkademik } = req.query; 

        const hasilUts = await nilaiUtsService.fetchNilaiUts(nim, tahunAkademik);

        return res.status(200).json({
            success: true,
            message: 'Berhasil mengambil data Nilai UTS',
            data: hasilUts
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || 'Terjadi kesalahan pada server'
        });
    }
};

module.exports = {
    getNilaiUts
};