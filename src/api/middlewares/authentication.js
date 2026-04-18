const jwt = require('jsonwebtoken');
const { errorResponder, errorTypes } = require('../core/errors');

module.exports = (request, response, next) => {
  try {
    const authHeader = request.get('Authorization');
    if (!authHeader) {
      throw errorResponder(errorTypes.UNAUTHORIZED, 'Token tidak ditemukan');
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, 'LINTARCUY');

    request.userData = { userId: decodedToken.userId, nim: decodedToken.nim };
    next();
  } catch (error) {
    return next(errorResponder(errorTypes.UNAUTHORIZED, 'Sesi berakhir, silakan login ulang'));
  }
};