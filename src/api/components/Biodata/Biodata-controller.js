const biodataService = require('./Biodata-service');

const createBiodata = async (req, res) => {
    try {
        const result = await biodataService.addBiodata(req.body);
        
        res.status(201).json({
            success: true,
            message: 'Biodata berhasil ditambahkan',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getBiodata = async (req, res) => {
    try {
        const result = await biodataService.getAllBiodata();
        
        res.status(200).json({
            success: true,
            message: 'Berhasil mengambil data biodata',
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
    createBiodata,
    getBiodata
};