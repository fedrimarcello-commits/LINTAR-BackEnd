const repository = require('./dispensasi-repository');
const usersRepository = require('../users/users-repository');
const { errorResponder, errorTypes } = require('../../../core/errors');

exports.getDispensasi = async (nim) => await repository.getByNim(nim);

exports.createDispensasi = async (data) => {
  const user = await usersRepository.getUserByNim(data.nim);

  if (!user) {
    throw errorResponder(
      errorTypes.UNPROCESSABLE_ENTITY, 
      'Data mahasiswa tidak ditemukan di tabel Users. Pastikan akun sudah terdaftar.'
    );
  }

  const tahunMasuk = user.tahunMasuk;

  let status = 'DAPAT MENGAJUKAN';

  if (tahunMasuk >= 2024) {
    status = 'TIDAK DAPAT MENGAJUKAN';
  }

  return await repository.create({
    ...data,
    statusPengajuan: status,
    tanggalPengajuan: new Date(),
  });
};