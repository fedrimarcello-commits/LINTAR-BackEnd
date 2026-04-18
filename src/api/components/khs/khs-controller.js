const khsService = require('./khs-service');

async function getNilaiKHS(request, response, next) {
  try {
    const nimMahasiswa = request.userData.nim;
    
    const hasilKHS = await khsService.getNilaiKHS(nimMahasiswa);

    return response.status(200).json({
      message: 'Data KHS berhasil ditarik',
      ...hasilKHS
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getNilaiKHS,
};