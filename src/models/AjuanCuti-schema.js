module.exports = (db) =>
  db.model(
    'AjuanCuti',
    new db.Schema({
      nim: { type: String, required: true },
      nama: { type: String, required: true },
      nomorPokokMahasiswa: { type: String, required: true },
      fakultasProgramStudi: { type: String, required: true },
      alamat: { type: String, required: true },
      teleponHp: { type: String, default: '-' },
      email: { type: String, required: true },
      tahunAkademikPengajuan: { type: String, required: true },
      tanggalBukaPengajuan: { type: String, required: true },
      daftarPengajuan: [
        {
          id: { type: String },
          alasanCuti: { type: String },
          tanggalPengajuan: { type: String },
          status: {
            type: String,
            enum: ['Pending', 'Disetujui', 'Ditolak'],
            default: 'Pending',
          },
          keterangan: { type: String, default: '' },
        },
      ],
    })
  );
