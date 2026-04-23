const biodataRepository = require('./Biodata-repository');

async function getBiodataByNim(nim) {
  return await biodataRepository.findByNim(nim);
}

async function createBiodata(data) {
  const existing = await biodataRepository.findByNim(data.nim);
  if (existing) {
    throw new Error('Biodata untuk akun ini sudah ada');
  }
  return await biodataRepository.createBiodata(data);
}

module.exports = {
  getBiodataByNim,
  createBiodata
};