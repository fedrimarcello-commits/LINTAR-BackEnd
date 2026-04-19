const express = require('express');
const nilaiUtsController = require('./uts-controller');
const authentication = require('../../middlewares/authentication'); 

const route = express.Router();
module.exports = (app) => {
    app.use('/NilaiUTS', route);

    route.get('/', authentication, nilaiUtsController.getNilaiUts);

};