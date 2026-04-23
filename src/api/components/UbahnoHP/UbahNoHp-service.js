const repository = require('./UbahNoHp-repository');

async function changeHandphone(nim, noHpBaru) {
  return await repository.updateHandphone(nim, noHpBaru);
}

module.exports = {
  changeHandphone,
};