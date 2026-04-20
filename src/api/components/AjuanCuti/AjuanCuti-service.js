const ajuanCutiRepository = require('./ajuancuti-repository');

module.exports = (db) => ({
  getAjuanCutiByNim: async (nim) => {
    const { ajuanCuti, biodata } = await ajuanCutiRepository.findByNim(nim);

    return {
      ajuanCuti,
      biodata,
    };
  },

  submitAjuanCuti: async (nim, alasanCuti) => {
    const biodata = await ajuanCutiRepository.findBiodataByNim(nim);

    if (!biodata) {
      throw new Error(`Data biodata tidak ditemukan untuk NIM: ${nim}`);
    }

    const existing = await ajuanCutiRepository.findByNim(nim);

    if (!existing.ajuanCuti) {
      await ajuanCutiRepository.create({
        nim,
        nama: biodata.namaMahasiswa,
        nomorPokokMahasiswa: nim,
        email: biodata.email,
        alamat: biodata.alamat,
        teleponHp: biodata.handphone,
        daftarPengajuan: [],
      });
    }

    const pengajuanData = {
      id: Date.now().toString(),
      alasanCuti,
      tanggalPengajuan: new Date().toISOString().split('T')[0],
      status: 'Pending',
      keterangan: '',
    };

    return await ajuanCutiRepository.addPengajuan(nim, pengajuanData);
  },
});
