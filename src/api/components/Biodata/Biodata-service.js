const biodataRepository = require('./Biodata-repository');

async function getBiodataByNim(nim) {
  return await biodataRepository.findByNim(nim);
}

module.exports = {
  getBiodataByNim,
};