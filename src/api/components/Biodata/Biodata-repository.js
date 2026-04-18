const BiodataModel = require('../models/Mahasiswa'); 

const createBiodata = async (data) => {
    const newBiodata = new BiodataModel(data);
    return await newBiodata.save();
};

const findAllBiodata = async () => {
    return await BiodataModel.find();
};

const findBiodataByNpm = async (npm) => {
    return await BiodataModel.findOne({ npm: npm });
};

module.exports = {
    createBiodata,
    findAllBiodata,
    findBiodataByNpm
};