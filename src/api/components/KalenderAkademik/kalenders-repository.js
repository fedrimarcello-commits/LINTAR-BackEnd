const { Kalender } = require('../../../models');

exports.getAll = async () => await Kalender.find();
