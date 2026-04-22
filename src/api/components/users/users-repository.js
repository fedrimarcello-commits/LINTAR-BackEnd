const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({});
}

async function getUser(id) {
  return Users.findById(id);
}


async function getUserByNim(nim) {
  return Users.findOne({ nim });
}


async function createUser(nim, password, namaLengkap, prodi, tahunMasuk) {
  return Users.create({ nim, password, namaLengkap, prodi, tahunMasuk });
}

async function updateUser(nim, namaLengkap, prodi, tahunMasuk) {
  return Users.updateOne(
    { nim: nim }, 
    { $set: { namaLengkap, prodi, tahunMasuk } }
  );
}

async function deleteUser(nim) {
  return Users.deleteOne({ nim: nim });
}

module.exports = {
  getUsers,
  getUser,
  getUserByNim,
  createUser,
  updateUser,
  deleteUser,
};