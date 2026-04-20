const uasRepository = require('./UasOnline-repository');

const getUasOtomatis = async (nim, semester_label) => {
    // Tarik daftar mata kuliah otomatis dari KHS
    const jadwalKhs = await uasRepository.getJadwalDariKHS(nim, semester_label);
    
    // Tarik daftar UAS yang sudah dikerjakan
    const submissions = await uasRepository.getSubmissions(nim, semester_label);

    // Gabungkan datanya (Auto-Mapping)
    const hasilTabel = jadwalKhs.map((mk, index) => {
        // Cek apakah kode_mk ini sudah ada file jawabannya
        const jawaban = submissions.find(sub => sub.kode_mk === mk.kode_mk);
        
        return {
            no: index + 1,
            kodeMk: mk.kode_mk,
            namaMk: mk.nama_mk,
            sks: mk.sks,
            kelas: 'A', // Bisa disesuaikan nanti
            tglPublish: '- s.d -',
            deskripsi: '-',
            tujuanPengiriman: '-',
            fileUasOnline: jawaban ? jawaban.fileUasOnline : null, // Jika sudah submit, munculkan link
            status: jawaban ? 'Sudah Dikumpulkan' : 'Belum Dikumpulkan'
        };
    });

    return hasilTabel;
};

const submitUas = async (data) => {
    const jadwalKhs = await uasRepository.getJadwalDariKHS(data.nim, data.semester_label);
    const validMk = jadwalKhs.find(mk => mk.kode_mk === data.kode_mk);
    
    if (!validMk) {
        throw new Error('Penolakan Sistem: Anda tidak terdaftar pada mata kuliah ini di KHS.');
    }

    const submissions = await uasRepository.getSubmissions(data.nim, data.semester_label);
    const sudahSubmit = submissions.find(sub => sub.kode_mk === data.kode_mk);
    
    if (sudahSubmit) {
        throw new Error('Anda sudah mengumpulkan jawaban UAS untuk mata kuliah ini.');
    }

    return await uasRepository.submitJawaban(data);
};

module.exports = { getUasOtomatis, submitUas };