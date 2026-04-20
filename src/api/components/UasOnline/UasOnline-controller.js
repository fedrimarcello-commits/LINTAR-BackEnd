const uasService = require('./UasOnline-service');

const lihatJadwalUas = async (req, res) => {
    try {
        const nim = req.userData.nim; 
        
        const semester_label = "Genap 2025"; 

        const result = await uasService.getUasOtomatis(nim, semester_label);
        
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const kumpulkanUas = async (req, res) => {
    try {
        const data = {
            nim: req.userData.nim,
            semester_label: "Genap 2025", 
            kode_mk: req.body.kode_mk,
            fileUasOnline: req.body.fileUasOnline
        };

        const result = await uasService.submitUas(data);
        res.status(201).json({ success: true, message: 'File UAS berhasil dikumpulkan', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { lihatJadwalUas, kumpulkanUas };