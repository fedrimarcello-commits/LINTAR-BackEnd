const repository = require('./kalenders-repository');

exports.getKalender = async () => await repository.getAll();
