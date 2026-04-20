module.exports = (db) =>
  db.model(
    'HistoriNilai',
    db.Schema(
      {
        nim: { type: String, required: true, index: true },
        thAkad: { type: String, required: true },
        kode: { type: String, required: true },
        mataKuliah: { type: String, required: true },
        sks: { type: Number, required: true },
        nilai: { type: String, required: true },
        bobot: { type: Number, required: true },
      },
      {
        timestamps: true,
      }
    )
  );
