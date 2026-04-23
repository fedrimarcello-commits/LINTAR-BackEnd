const { Users } = require('../../../models');

async function getUserByNim(nim) {
  return Users.findOne({ nim });
}

async function updatePassword(nim, hashedPassword) {
  return Users.updateOne(
    { nim: nim },
    { $set: { password: hashedPassword } }
  );
}

module.exports = {
  getUserByNim,
  updatePassword,
};