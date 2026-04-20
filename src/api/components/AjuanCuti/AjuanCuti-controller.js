const ajuanCutiService = require('./ajuancuti-service');

module.exports = (db) => {
  const service = ajuanCutiService(db);

  return {
    getAjuanCuti: async (req, res) => {
      try {
        const { nim } = req.userData || req.user || {};

        if (!nim) {
          return res
            .status(400)
            .json({ message: 'NIM tidak ditemukan di token' });
        }

        const data = await service.getAjuanCutiByNim(nim);
        const { biodata, ajuanCuti } = data;

        if (!biodata) {
          return res
            .status(404)
            .json({ message: 'Data biodata tidak ditemukan' });
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
          message:
            ajuanCuti?.daftarPengajuan && ajuanCuti.daftarPengajuan.length > 0
              ? ''
              : 'Belum ada data pengajuan cuti akademik.',
        };

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },

    submitAjuanCuti: async (req, res) => {
      try {
        const { nim } = req.userData || req.user || {};
        const { alasanCuti } = req.body;

        if (!nim) {
          return res
            .status(400)
            .json({ message: 'NIM tidak ditemukan di token' });
        }

        if (!alasanCuti) {
          return res.status(400).json({ message: 'Alasan cuti wajib diisi' });
        }

        const result = await service.submitAjuanCuti(nim, alasanCuti);

        res.status(201).json({
          message: 'Pengajuan cuti berhasil disubmit',
          data: result,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};
