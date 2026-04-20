const { Dispensasi } = require('../../../models');

exports.getByNim = async (nim) => await Dispensasi.find({ nim });

exports.create = async (data) => await Dispensasi.create(data);
