const repository = require('./kehadiran-repository');

exports.getKehadiran = async (nim) => {
  const data = await repository.getByNim(nim);

  return data.map((item) => {
    const { jumlahPertemuan, jumlahKehadiran } = item;

    let persentase = 0;

    if (jumlahPertemuan > 0) {
      persentase = (jumlahKehadiran / jumlahPertemuan) * 100;
    }

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
