
const express=require('express')
const {SignUp, Signin, finduser} = require('./Controller/UserController')

const router=express.Router()

router.route('/signup').post(SignUp)
router.route('/signin').post(Signin)
router.route('/singleuser/:id').get(finduser)
module.exports=router