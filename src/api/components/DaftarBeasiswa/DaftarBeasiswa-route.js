const express = require('express');
const router = express.Router();
const beasiswaController = require('./DaftarBeasiswa-controller');

router.post('/daftar', beasiswaController.ajukanBeasiswa);

router.get('/', beasiswaController.lihatDaftarBeasiswa);

module.exports = router;