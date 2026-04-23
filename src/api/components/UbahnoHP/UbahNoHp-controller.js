const service = require('./UbahNoHp-service');

async function ubahNoHp(req, res, next) {
  try {
    const nimUser = req.userData.nim;
    const { noHpBaru } = req.body;

    if (!noHpBaru) {
      return res.status(400).json({ message: 'Nomor HP baru wajib diisi' });
    }

    const updateResult = await service.changeHandphone(nimUser, noHpBaru);

    if (updateResult.matchedCount === 0) {
      return res.status(404).json({ message: 'Biodata tidak ditemukan. Silakan buat biodata terlebih dahulu.' });
    }

    return res.status(200).json({ message: 'Nomor HP berhasil diperbarui' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  ubahNoHp,
};