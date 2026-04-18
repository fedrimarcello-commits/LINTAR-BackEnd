const jadwalKuliahService = require('./JadwalKuliah-service');

class JadwalKuliahController {
  async getAll(req, res) {
    try {
      const data = await jadwalKuliahService.getAllJadwal();
      const result = data.map((item, index) => ({
        no: index + 1,
        kode: item.kode,
        mataKuliah: item.mataKuliah,
        sks: item.sks,
        kelas: item.kelas,
        dosen: item.dosen,
        ruangWaktu: item.ruangWaktu,
        ket: item.ket || '',
        kodeJoinTeams: item.kodeJoinTeams || '',
        sap: item.sap || '',
        emailDosen: item.emailDosen || '',
      }));
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByNim(req, res) {
    try {
      const { nim } = req.params;
      const data = await jadwalKuliahService.getByNim(nim);
      const result = data.map((item, index) => ({
        no: index + 1,
        kode: item.kode,
        mataKuliah: item.mataKuliah,
        sks: item.sks,
        kelas: item.kelas,
        dosen: item.dosen,
        ruangWaktu: item.ruangWaktu,
        ket: item.ket || '',
        kodeJoinTeams: item.kodeJoinTeams || '',
        sap: item.sap || '',
        emailDosen: item.emailDosen || '',
      }));
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new JadwalKuliahController();
