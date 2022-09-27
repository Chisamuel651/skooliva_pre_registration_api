const mongoose = require('mongoose');
const yup = require('yup');
const Student = require('./student');



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

const validateStudent = studentPre =>{
    const schema = yup.object().shape({
        firstname:yup.string().required(),
        lastname:yup.string().required(),
        mobile:yup
            .string().required()
            .min(9, 'Please your mobile number contains exactly 9 numbers')
            .max(9, 'Please your mobile number contains exactly 9 numbers'),
        dob:yup.string().required(),
        pob:yup.string().required(),
        regionOrigin:yup.string().required(),
        sex:yup.string().required(),
        residence:yup.string().required(),
        id_number:yup
            .string().required()
            .min(9, 'Please your id number contains exactly 9 numbers')
            .max(9, 'Please your id number contains exactly 9 numbers'),
        email:yup.string().required().email(),
        nationality:yup.string().required(),
        faculty:yup.string().required(),
        specialty1:yup.string().required(),
        specialty2:yup.string().required(),
        specialty3:yup.string().required()
    });

    return schema
    .validate(studentPre)
    .then(studentPre => studentPre)
    .catch(error => {
        return{
            message: error.message
        }
    });
}


exports.StudentPre = new mongoose.model('StudentPre', PreregistrationSchema);
exports.validateStudent = validateStudent;