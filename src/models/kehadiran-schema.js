module.exports = (mongoose) => {
  const kehadiranSchema = new mongoose.Schema({
    nim: {
      type: String,
      required: true,
    },
    no: {
      type: Number,
      required: true,
    },
    kode: {
      type: String,
      required: true,
    },
    mataKuliah: {
      type: String,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
    jumlahPertemuan: {
      type: Number,
      required: true,
      default: 0,
    },
    jumlahKehadiran: {
      type: Number,
      required: true,
      default: 0,
    },
  });

  return mongoose.model('Kehadiran', kehadiranSchema);
};
