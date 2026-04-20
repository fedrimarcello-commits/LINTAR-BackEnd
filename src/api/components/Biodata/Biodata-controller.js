const biodataService = require('./biodata-service');

module.exports = (db) => {
  const service = biodataService(db);

  return {
    getBiodata: async (req, res) => {
      try {
        const { nim } = req.userData;
        if (!nim) {
          return res
            .status(400)
            .json({ message: 'NIM tidak ditemukan di token' });
        }

        const biodata = await service.getBiodataByNim(nim);

        const response = {
          dataMahasiswa: {
            npm: biodata.nim,
            namaMahasiswa: biodata.namaMahasiswa,
            noRekening: biodata.noRekening || '-',
            tempatTanggalLahir: biodata.tempatTanggalLahir,
            jenisKelamin: biodata.jenisKelamin,
            agama: biodata.agama,
            alamat: biodata.alamat,
            telepon: biodata.telepon,
            handphone: biodata.handphone,
            email: biodata.email,
          },
          dataSekolah: {
            asalSekolah: biodata.asalSekolah,
            noIjazah: biodata.noIjazah,
            tglIjazah: biodata.tglIjazah,
          },
          dataOrangTua: {
            namaOrangTuaWali: biodata.namaOrangTuaWali,
            alamat: biodata.alamatOrangTua,
            telepon: biodata.teleponOrangTua,
          },
        };

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    },
  };
};
