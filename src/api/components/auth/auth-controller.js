const authService = require('./auth-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function login(request, response, next) {
  try {
    const { nim, password } = request.body;

    const result = await authService.login(nim, password);
    if (!result) {
      throw errorResponder(errorTypes.INVALID_CREDENTIALS, 'NIM atau Password salah');
    }

    return response.status(200).json({
      message: 'Login berhasil!',
      ...result
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};