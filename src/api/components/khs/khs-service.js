const khsRepository = require('./khs-repository');

async function getNilaiKHS(nim) {
  const dataKhs = await khsRepository.getKHSByNim(nim);
  if (!dataKhs) return null;

  let totalSks = 0;
  let totalBobotKualitas = 0;

  const detailNilai = dataKhs.map((item) => {
    const bobotKualitas = item.sks * item.nilai_angka;
    totalSks += item.sks;
    totalBobotKualitas += bobotKualitas;

    return {
      kode_mk: item.kode_mk,
      nama_mk: item.nama_mk,
      status: item.status,
      sks: item.sks,
      nilai_huruf: item.nilai_huruf,
      nilai_angka: item.nilai_angka,
      bobot_kualitas: bobotKualitas
    };
  });

  const ips = totalSks > 0 ? (totalBobotKualitas / totalSks).toFixed(2) : 0;

  return {
    mahasiswa: {
      nim: nim,
      semester_label: dataKhs.length > 0 ? dataKhs[0].semester_label : '-'
    },
    detail_nilai: detailNilai,
    ringkasan: {
      total_sks_semester_ini: totalSks,
      ips: parseFloat(ips)
    }
  };
}

module.exports = {
  getNilaiKHS,
};