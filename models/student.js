const mongoose = require('mongoose');

// student schema
const StudentSchema = mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required:true
    },
    mobile:{
        type: String,
        required: true,
        minlength: 9,
        maxlength: 9
    },
    dob:{
        type: String,
        required: true
    },
    pob:{
        type: String,
        required: true
    },
    regionOrigin:{
        type: String,
        required: true
    },
    sex:{
        type: String,
        required: true
    },
    residence:{
        type: String,
        required: true
    },
    id_number:{
        type: String,
        required: true,
        minlength: 9,
        maxlength: 9
    },
    email:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('Student', StudentSchema);