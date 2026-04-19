module.exports = (mongoose) => {
  const dispensasiSchema = new mongoose.Schema({
    nim: {
      type: String,
      required: true,
    },
    nama: String,
    fakultas: String,
    alamat: String,
    noTelepon: String,
    tahunAkademik: String,
    statusPengajuan: String,
    tanggalPengajuan: Date,
    alasan: String,
  });

  return mongoose.model('Dispensasi', dispensasiSchema);
};
