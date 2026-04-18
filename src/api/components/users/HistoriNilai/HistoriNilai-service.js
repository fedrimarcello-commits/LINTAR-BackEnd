const historiNilaiRepository = require('./HistoriNilai-repository');

class HistoriNilaiService {
  async getAllHistoriNilai() {
    return await historiNilaiRepository.getAll();
  }

  async getHistoriByNim(nim) {
    return await historiNilaiRepository.getByNim(nim);
  }
}

module.exports = new HistoriNilaiService();