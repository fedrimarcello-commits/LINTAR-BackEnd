const BeasiswaModel = require('./DaftarBeasiswa-schema');

const createPendaftaran = async (data) => {
    const newPendaftaran = new BeasiswaModel(data);
    return await newPendaftaran.save();
};

const findPendaftaranByNpm = async (npm) => {
    return await BeasiswaModel.findOne({ npm: npm });
};

const findAllPendaftaran = async () => {
    return await BeasiswaModel.find();
};

module.exports = {
    createPendaftaran,
    findPendaftaranByNpm,
    findAllPendaftaran
};