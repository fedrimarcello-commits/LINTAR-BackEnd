const historiNilaiService = require('./HistoriNilai-service');

class HistoriNilaiController {
  async getAll(req, res) {
    try {
      const data = await historiNilaiService.getAllHistoriNilai();
      const result = data.map((item, index) => ({
        no: index + 1,
        thAkad: item.thAkad,
        kode: item.kode,
        mataKuliah: item.mataKuliah,
        sks: item.sks,
        nilai: item.nilai,
        bobot: item.bobot,
      }));
      res.status(200).json(result);
    } catch (error) {
      console.error('=== ERROR HISTORI NILAI ===');
      console.error(error.message);
      console.error(error.stack);
      res.status(500).json({ message: error.message });
    }
  }

  async getByNim(req, res) {
    try {
      const { nim } = req.params;
      const data = await historiNilaiService.getHistoriByNim(nim);
      const result = data.map((item, index) => ({
        no: index + 1,
        thAkad: item.thAkad,
        kode: item.kode,
        mataKuliah: item.mataKuliah,
        sks: item.sks,
        nilai: item.nilai,
        bobot: item.bobot,
      }));
      res.status(200).json(result);
    } catch (error) {
      console.error('=== ERROR HISTORI NILAI BY NIM ===');
      console.error(error.message);
      console.error(error.stack);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new HistoriNilaiController();
