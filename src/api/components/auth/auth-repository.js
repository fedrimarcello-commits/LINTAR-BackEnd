const { Users } = require('../../../models');

async function getUserByNim(nim) {
  return Users.findOne({ nim });
}

module.exports = {
  getUserByNim,
};