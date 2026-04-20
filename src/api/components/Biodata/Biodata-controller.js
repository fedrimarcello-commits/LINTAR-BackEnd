// Perhatikan nama file di dalam require(), pastikan sama persis dengan nama file di folder Anda
const biodataService = require('./Biodata-service');

async function getBiodata(req, res, next) {
  try {
    const { nim } = req.userData || req.user || {};

    if (!nim) {
      return res.status(400).json({ message: 'NIM tidak ditemukan di token' });
    }

    const data = await biodataService.getBiodataByNim(nim);

    if (!data) {
      return res.status(404).json({ message: 'Data biodata tidak ditemukan' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getBiodata,
};