const beasiswaController = require('./DaftarBeasiswa-controller');

module.exports = (app) => {
    
    app.post('/beasiswa/daftar', beasiswaController.ajukanBeasiswa);

    app.get('/beasiswa', beasiswaController.lihatDaftarBeasiswa);
};