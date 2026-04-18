const jadwalKuliahRepository = require('./JadwalKuliah-repository');

class JadwalKuliahService {
  async getAllJadwal() {
    return await jadwalKuliahRepository.getAll();
  }

  async getByNim(nim) {
    return await jadwalKuliahRepository.getByNim(nim);
  }
}

module.exports = new JadwalKuliahService();
