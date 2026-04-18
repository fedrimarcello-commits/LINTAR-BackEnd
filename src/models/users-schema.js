module.exports = (db) =>
  db.model(
    'Users',
    db.Schema({
      nim: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      namaLengkap: { type: String, required: true },
      prodi: { type: String, required: true }, 
      tahunMasuk: { type: Number, required: true }, 
    })
  );