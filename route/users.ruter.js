const express =require('express');
const router= express.Router();
const bodyParser= require('body-parser');
const studentInfo= require('../Controller/control')


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/data',studentInfo.checking);
router.post("/", studentInfo.addinformation);
router.get('/:id', studentInfo.findStudent);
router.delete('/:id',studentInfo.DeleteStudent);
router.put('/:id', studentInfo.StudentEditor);
 
module.exports=router;