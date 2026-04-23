const beasiswaController = require('./DaftarBeasiswa-controller');
const authentication = require('../../middlewares/authentication');
module.exports = (app) => {
    
    app.post('/beasiswa/daftar', authentication, beasiswaController.ajukanBeasiswa);

    app.get('/beasiswa/hasil', authentication, beasiswaController.lihatHasil);
    
};