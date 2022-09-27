const express = require('express');
const router = express.Router();
const {StudentPre, validateStudent} = require('../models/preregistration');

// post data
// use async and await inorder so that the informations are well verified before validation
router.post('/', async (req,res) => {
    const error = await validateStudent(req.body);
    if(error.message) res.status(400).send(error.message);
    studentPre = new StudentPre({
        student:{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            mobile: req.body.mobile,
            dob: req.body.dob,
            pob: req.body.pob,
            regionOrigin: req.body.regionOrigin,
            sex: req.body.sex,
            residence: req.body.residence,
            id_number: req.body.id_number,
            email: req.body.email,
            nationality: req.body.nationality
        },
        faculty: req.body.faculty,
        specialty1: req.body.specialty1,
        specialty2: req.body.specialty2,
        specialty3: req.body.specialty3
    });

    studentPre.save().then((studentPre) => {
        res.send(studentPre);
    })
    .catch(error =>{
        res.status(500).send("you have not successfully submitted your files")
    });
});

module.exports = router;