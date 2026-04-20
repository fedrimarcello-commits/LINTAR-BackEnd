const { NilaiUts } = require('../../../models');

const getNilaiByNimAndTahun = async (nim, tahunAkademik) => {
    const query = { nim };
    
    if (tahunAkademik) {
        query.tahunAkademik = tahunAkademik;
    }
    
    return await NilaiUts.find(query).sort({ kodeMK: 1 });
};

module.exports = {
    getNilaiByNimAndTahun
};