const service = require('./UbahPassword-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword, passwordMatched } = require('../../../utils/password');

async function ubahPassword(req, res, next) {
  try {
    const nimUser = req.userData.nim;
    const { passwordLama, passwordBaru, konfirmasiPasswordBaru } = req.body;

    if (!passwordLama || !passwordBaru || !konfirmasiPasswordBaru) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password lama, password baru, dan konfirmasi harus diisi');
    }

    if (passwordBaru.length < 8) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password baru minimal 8 karakter');
    }

    if (passwordBaru !== konfirmasiPasswordBaru) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Password baru dan konfirmasi tidak cocok');
    }

    const user = await service.getUserByNim(nimUser);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User tidak ditemukan');
    }

    const isPasswordMatch = await passwordMatched(passwordLama, user.password);
    if (!isPasswordMatch) {
      throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'Password lama salah');
    }

    const hashedPassword = await hashPassword(passwordBaru);
    await service.changePassword(nimUser, hashedPassword);

    return res.status(200).json({ message: 'Password berhasil diubah' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  ubahPassword,
};