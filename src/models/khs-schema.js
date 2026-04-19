module.exports = (mongoose) => {
  const khsSchema = new mongoose.Schema({
    nim: { type: String, required: true },
    semester_label: { type: String, required: true },
    kode_mk: { type: String, required: true },
    nama_mk: { type: String, required: true },
    status: { type: String, default: 'B' },
    sks: { type: Number, required: true },
    nilai_huruf: { type: String, default: '' },
    nilai_angka: { type: Number, default: 0 },
    semester: { type: Number, required: true }
  });

  return mongoose.model('Khs', khsSchema, 'khs'); 
};