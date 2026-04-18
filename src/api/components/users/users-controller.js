const usersService = require('./users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword } = require('../../../utils/password');

async function getUsers(request, response, next) {
  try {
    const users = await usersService.getUsers();
    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUser(request, response, next) {
  try {
    const user = await usersService.getUser(request.params.id);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }
    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function createUser(request, response, next) {
  try {
    const {
      nim,
      password,
      namaLengkap,
      prodi,
      tahunMasuk,
      confirm_password: confirmPassword,
    } = request.body;

    // Validasi input tidak boleh kosong
    if (!nim) throw errorResponder(errorTypes.VALIDATION_ERROR, 'NIM is required');
    if (!namaLengkap) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Nama Lengkap is required');
    if (!prodi) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Prodi is required');
    if (!tahunMasuk) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Tahun Masuk is required');

    // NIM harus unik
    if (await usersService.nimExists(nim)) {
      throw errorResponder(errorTypes.EMAIL_ALREADY_TAKEN, 'NIM already exists');
    }

    if (password.length < 8) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password must be at least 8 characters long');
    }

    if (password !== confirmPassword) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password and confirm password do not match');
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user ke database
    const success = await usersService.createUser(
      nim,
      hashedPassword,
      namaLengkap,
      prodi,
      tahunMasuk
    );

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to create user');
    }

    return response.status(201).json({ message: 'User berhasil didaftarkan' });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(request, response, next) {
  return response.status(200).json({ message: 'Fitur update user belum disesuaikan' });
}

async function changePassword(request, response, next) {
  return next(errorResponder(errorTypes.NOT_IMPLEMENTED));
}

async function deleteUser(request, response, next) {
  return response.status(200).json({ message: 'Fitur delete user belum disesuaikan' });
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};