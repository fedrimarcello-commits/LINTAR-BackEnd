const beasiswaRepository = require('./DaftarBeasiswa-repository');

const daftarBeasiswa = async (data) => {
    const existingDaftar = await beasiswaRepository.findPendaftaranByNim(data.nim);
    if (existingDaftar) {
        throw new Error('NIM ini sudah terdaftar dalam pengajuan beasiswa.');
    }

    const errorMessages = [];

    if (data.statusMahasiswa !== 'Aktif') {
        errorMessages.push('Berstatus "Aktif" pada semester berjalan');
    }
    
    if (data.semesterAktif < 3) {
        errorMessages.push('Masa Aktif Belum memenuhi minimal 3 Semester');
    }
    
    if (data.ipk < 3.00) {
        errorMessages.push('IPK tidak memenuhi >= 3.00');
    }

    if (data.terimaBeasiswaLain === true) {
        errorMessages.push('Tidak sedang menerima beasiswa dari instansi lain');
    }

    if (errorMessages.length > 0) {
        const combinedError = 'Mohon Maaf, anda tidak dapat mendaftar Beasiswa Karena tidak memenuhi persyaratan berikut:\n. ' + errorMessages.join('\n. ');
        throw new Error(combinedError);
    }

    return await beasiswaRepository.createPendaftaran(data);
};

const getAllPendaftaran = async () => {
    return await beasiswaRepository.findAllPendaftaran();
};

module.exports = {
    daftarBeasiswa,
    getAllPendaftaran
};