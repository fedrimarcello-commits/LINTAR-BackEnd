const { Kehadiran } = require('../../../models');

exports.getAll = async () => await Kehadiran.find();

exports.getByNim = async (nim) => await Kehadiran.find({ nim });

exports.create = async (data) => await Kehadiran.create(data);
