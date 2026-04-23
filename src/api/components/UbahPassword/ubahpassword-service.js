const repository = require('./UbahPassword-repository');

async function getUserByNim(nim) {
  return repository.getUserByNim(nim);
}

async function changePassword(nim, hashedPassword) {
  return repository.updatePassword(nim, hashedPassword);
}

module.exports = {
  getUserByNim,
  changePassword,
};