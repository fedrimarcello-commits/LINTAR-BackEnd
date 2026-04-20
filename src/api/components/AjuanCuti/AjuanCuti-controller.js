const ajuanCutiService = require('./AjuanCuti-service');

async function getAjuanCuti(req, res, next) {
  try {
    const { nim } = req.userData || req.user || {};

    if (!nim) {
      return res.status(400).json({ message: 'NIM tidak ditemukan di token' });
    }

    const data = await ajuanCutiService.getAjuanCutiByNim(nim);
    const { biodata, ajuanCuti } = data;

    if (!biodata) {
      return res.status(404).json({ message: 'Data biodata tidak ditemukan' });
    }

    const response = {
      informasiPribadi: {
        nama: biodata.namaMahasiswa,
        nomorPokokMahasiswa: nim,
        alamat: biodata.alamat,
        teleponHp: biodata.handphone,
        email: biodata.email,
      },
      daftarPengajuanCutiAkademik: ajuanCuti?.daftarPengajuan || [],
      message: ajuanCuti?.daftarPengajuan && ajuanCuti.daftarPengajuan.length > 0
          ? ''
          : 'Belum ada data pengajuan cuti akademik.',
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function submitAjuanCuti(req, res, next) {
  try {
    const { nim } = req.userData || req.user || {};
    const { alasanCuti } = req.body;

    if (!nim) {
      return res.status(400).json({ message: 'NIM tidak ditemukan di token' });
    }

    if (!alasanCuti) {
      return res.status(400).json({ message: 'Alasan cuti wajib diisi' });
    }

    const result = await ajuanCutiService.submitAjuanCuti(nim, alasanCuti);

    return res.status(201).json({
      message: 'Pengajuan cuti berhasil disubmit',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAjuanCuti,
  submitAjuanCuti,
};