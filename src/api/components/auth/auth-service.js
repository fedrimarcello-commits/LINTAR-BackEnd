const jwt = require('jsonwebtoken');
const authRepository = require('./auth-repository');

const { passwordMatched } = require('../../../utils/password');

async function login(nim, password) {
  const user = await authRepository.getUserByNim(nim);
  if (!user) return null;

  const isMatch = await passwordMatched(password, user.password);
  if (!isMatch) return null;

  const token = jwt.sign({ userId: user._id, nim: user.nim }, 'LINTARCUY', {
    expiresIn: '1h',
  });

  return {
    token,
    user: { nim: user.nim, namaLengkap: user.namaLengkap },
  };
}

module.exports = {
  login,
};
