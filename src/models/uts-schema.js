module.exports = (mongoose) => {
    const nilaiUtsSchema = new mongoose.Schema({
        nim: { type: String, required: true },
        tahunAkademik: { type: String, required: true },
        kodeMK: { type: String, required: true },
        namaMK: { type: String, required: true },
        sks: { type: Number, required: true },
        nilaiUts: { type: String, default: "-" }
    });

    return mongoose.model('NilaiUts', nilaiUtsSchema, 'uts'); 
};