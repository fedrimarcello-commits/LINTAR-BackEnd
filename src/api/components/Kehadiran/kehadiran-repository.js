const { Kehadiran } = require('../../../models');

exports.getByNim = async (nim) => await Kehadiran.find({ nim });

exports.create = async (data) => await Kehadiran.create(data);
