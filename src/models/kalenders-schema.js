module.exports = (mongoose) => {
  const kalenderSchema = new mongoose.Schema({
    no: Number,
    tanggalMulai: Date,
    tanggalSelesai: Date,
    keterangan: String,
    semester: String,
  });

  return mongoose.model('Kalender', kalenderSchema);
};
