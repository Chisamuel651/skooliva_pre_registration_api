const mongoose = require('mongoose');
const Student = require('./student')

// preregistration schema
const PreregistrationSchema = mongoose.Schema({
    student: Student.schema,
    faculty:{
        type: String,
        required: true
    },
    specialty1:{
        type: String,
        required: true
    },
    specialty2:{
        type: String,
        required: true
    },
    specialty3:{
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('Preregistration', PreregistrationSchema);