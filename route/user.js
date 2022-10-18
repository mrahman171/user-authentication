const express =require('express');
const router= express.Router();
const bodyParser= require('body-parser');
const test= require('../Controller/userControler')
const UserAuthorization= require('../Middeleware/checking')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/users', UserAuthorization,test.ViwesAllUser);

router.post('/register',test.UserRegsister);

router.post('/login',test.loginFunction);


module.exports=router;