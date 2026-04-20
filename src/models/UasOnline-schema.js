const mongoose = require('mongoose');

const uasOnlineSchema = new mongoose.Schema({
    nim: { type: String, required: true },
    semester_label: { type: String, required: true },
    kode_mk: { type: String, required: true }, 
    fileUasOnline: { type: String, required: true } 
},);

module.exports = mongoose.model('UasOnline', uasOnlineSchema);