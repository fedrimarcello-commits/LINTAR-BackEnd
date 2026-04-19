module.exports = (db) =>
  db.model(
    'JadwalKuliah',
    db.Schema(
      {
        nim: { type: String, required: true, index: true },
        kode: { type: String, required: true },
        mataKuliah: { type: String, required: true },
        sks: { type: Number, required: true },
        kelas: { type: String, required: true },
        dosen: { type: String, required: true },
        ruangWaktu: { type: String, required: true },
        ket: { type: String },
        kodeJoinTeams: { type: String },
        sap: { type: String },
        emailDosen: { type: String },
      },
      {
        timestamps: true,
      }
    )
  );
