const express= require('express')
const router=express.Router()
const AuthController = require('../controller/AuthController') 
const {validateUser} = require('../middleware/validation');

router.post('/register', validateUser,AuthController.register)
module.exports=router