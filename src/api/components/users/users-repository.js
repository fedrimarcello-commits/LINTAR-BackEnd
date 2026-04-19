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

async function updateUser(id, nim, namaLengkap, prodi, tahunMasuk) {
  return Users.updateOne({ _id: id }, { $set: { nim, namaLengkap, prodi, tahunMasuk } });
}

async function changePassword(id, password) {
  return Users.updateOne({ _id: id }, { $set: { password } });
}

async function deleteUser(id) {
  return Users.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  getUser,
  getUserByNim,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};