const express = require('express');
const router = express.Router();
const biodataController = require('./Biodata-controller');

router.post('/', biodataController.createBiodata);

router.get('/', biodataController.getBiodata);

module.exports = router;