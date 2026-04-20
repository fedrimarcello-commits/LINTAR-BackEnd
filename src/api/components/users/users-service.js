const usersRepository = require('./users-repository');

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUser(id) {
  return usersRepository.getUser(id);
}


async function nimExists(nim) {
  const user = await usersRepository.getUserByNim(nim);
  return !!user; 
}

async function createUser(nim, password, namaLengkap, prodi, tahunMasuk) {
  return usersRepository.createUser(nim, password, namaLengkap, prodi, tahunMasuk);
}

async function updateUser(id, nim, namaLengkap, prodi, tahunMasuk) {
  return usersRepository.updateUser(id, nim, namaLengkap, prodi, tahunMasuk);
}

async function deleteUser(id) {
  return usersRepository.deleteUser(id);
}

module.exports = {
  getUsers,
  getUser,
  nimExists,
  createUser,
  updateUser,
  deleteUser,
};