const repository = require('./kehadiran-repository');

exports.getKehadiran = async (nim) => {
  if (!nim) {
    const err = new Error('NIM tidak ditemukan dari token');
    err.statusCode = 401;
    throw err;
  }

  const data = await repository.getByNim(nim);

  return data.map((item) => {
    const { jumlahPertemuan, jumlahKehadiran } = item;

    const persentase =
      jumlahPertemuan > 0 ? (jumlahKehadiran / jumlahPertemuan) * 100 : 0;

    return {
      no: item.no,
      kode: item.kode,
      mataKuliah: item.mataKuliah,
      kelas: item.kelas,
      jumlahPertemuan,
      jumlahKehadiran,
      persentase: `${persentase.toFixed(2)}%`,
    };
  });
};
