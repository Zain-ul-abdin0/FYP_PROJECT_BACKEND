const express= require('express')
const router=express.Router()
const AuthController = require('../controller/AuthController'); 
const auth = require('../middleware/auth');
const { loginValidation } = require('../middleware/loginValidation');
const {validateUser} = require('../middleware/validation');

router.post('/signUp', validateUser,AuthController.signUp)
router.post('/login', loginValidation,AuthController.login)
router.get('/user', auth, AuthController.getCurrentUser)
module.exports=router
