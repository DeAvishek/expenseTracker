const router=require('express').Router()
const {signupUser}=require('../controllers/user_hand')
const{loginUser}=require('../controllers/user_hand')
//Routes
router.post('/signup',signupUser)
router.post('/login',loginUser)

module.exports=router