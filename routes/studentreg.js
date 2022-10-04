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
        specialty3: req.body.specialty3,
        level: req.body.level
    });

    studentPre.save().then((studentPre) => {
        res.send(studentPre);
    })
    .catch(error =>{
        res.status(500).send("you have not successfully submitted your files")
    });
});

// get all data
router.get('/', (req, res) => {
    StudentPre.find().then(studentPre =>
        res.send(studentPre)).catch((error) => {
            res.status(500).send("Something went wrong try again");
        }
    )
})

// get data by id
router.get('/:studentID', async (req,res) => {
    const studentid = await StudentPre.findById(req.params.studentID);

    if(!studentid) res.status(404).send('sorry! student donot exist');
    res.send(studentid);
});

// update book based on the id
router.put('/:studentID', async (req, res) => {
    const updatedStudent = await StudentPre.findByIdAndUpdate(req.params.studentID, {
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
        specialty3: req.body.specialty3,
        level: req.body.level
    }, {new:true});

    if(!updatedStudent) res.status(404).send('the update failed');
    res.send(updatedStudent);
})

// delete student based on id
router.delete('/:studentID', async (req,res) => {
    const studentid = await StudentPre.findByIdAndRemove(req.params.studentID);
    if(!studentid) res.status(404).send('sorry! student was not deleted');
    res.send("student is successfully deleted");
})

module.exports = router;