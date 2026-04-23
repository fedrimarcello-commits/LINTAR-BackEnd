const biodataService = require('./Biodata-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getBiodata(req, res, next) {
  try {
    const { nim } = req.userData || {};

    if (!nim) {
      return res.status(400).json({ message: 'NIM tidak ditemukan di token' });
    }

    const data = await biodataService.getBiodataByNim(nim);

    if (!data) {
      return res.status(404).json({ message: 'Data biodata tidak ditemukan' });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function createBiodata(req, res, next) {
  try {
    const nimUser = req.userData.nim;

    const existingBiodata = await biodataService.getBiodataByNim(nimUser);
    if (existingBiodata) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY, 
        'Biodata untuk akun ini sudah terdaftar. Anda tidak dapat membuatnya lagi.'
      );
    }

    const data = { ...req.body, nim: nimUser };
    const result = await biodataService.createBiodata(data);
    
    return res.status(201).json({
      message: 'Biodata berhasil disimpan',
      data: result
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBiodata,
  createBiodata,
};