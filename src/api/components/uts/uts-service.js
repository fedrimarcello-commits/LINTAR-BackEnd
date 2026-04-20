const nilaiUtsRepository = require('./uts-repository');

const fetchNilaiUts = async (nim, tahunAkademik) => {
    if (!nim) {
        throw new Error('NIM tidak diberikan atau tidak valid');
    }

    const dataNilai = await nilaiUtsRepository.getNilaiByNimAndTahun(nim, tahunAkademik);
    
    return dataNilai;
};

module.exports = {
    fetchNilaiUts
};