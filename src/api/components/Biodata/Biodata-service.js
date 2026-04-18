const biodataRepository = require('./Biodata-repository');

const addBiodata = async (data) => {
    const existingData = await biodataRepository.findBiodataByNpm(data.npm);
    if (existingData) {
        throw new Error('NPM sudah terdaftar di database!');
    }

    return await biodataRepository.createBiodata(data);
};

const getAllBiodata = async () => {
    const data = await biodataRepository.findAllBiodata();
    return data;
};

module.exports = {
    addBiodata,
    getAllBiodata
};