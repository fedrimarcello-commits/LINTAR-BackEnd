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

    if (!nim) throw errorResponder(errorTypes.VALIDATION_ERROR, 'NIM is required');
    if (!namaLengkap) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Nama Lengkap is required');
    if (!prodi) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Prodi is required');
    if (!tahunMasuk) throw errorResponder(errorTypes.VALIDATION_ERROR, 'Tahun Masuk is required');

    if (await usersService.nimExists(nim)) {
      throw errorResponder(errorTypes.EMAIL_ALREADY_TAKEN, 'NIM already exists');
    }

    if (password.length < 8) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password must be at least 8 characters long');
    }

    if (password !== confirmPassword) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password and confirm password do not match');
    }

    const hashedPassword = await hashPassword(password);

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
  try {
    const nimUser = request.userData.nim; 
    
    const { namaLengkap, prodi, tahunMasuk } = request.body;

    const updateResult = await usersService.updateUser(nimUser, namaLengkap, prodi, tahunMasuk);
    if (updateResult.matchedCount === 0) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    return response.status(200).json({ message: 'Data mahasiswa berhasil diperbarui' });
  } catch (error) {
    return next(error);
  }
}

async function deleteUser(request, response, next) {
  try {
    const nimUser = request.userData.nim;

    const userExists = await usersService.nimExists(nimUser);
    if (!userExists) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    await usersService.deleteUser(nimUser);

    return response.status(200).json({ message: 'Akun mahasiswa berhasil dihapus' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};