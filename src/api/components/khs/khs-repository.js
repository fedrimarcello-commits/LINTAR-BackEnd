const { Khs } = require('../../../models');

async function getKHSByNim(nim) {
  return Khs.find({ nim: nim }); 
}

module.exports = {
  getKHSByNim,
};