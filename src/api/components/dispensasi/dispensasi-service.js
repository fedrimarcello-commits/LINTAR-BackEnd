const repository = require('./dispensasi-repository');

exports.getDispensasi = async (nim) => await repository.getByNim(nim);

exports.createDispensasi = async (data) => {
  const tahunMasuk = parseInt(data.nim.substring(0, 4));

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
