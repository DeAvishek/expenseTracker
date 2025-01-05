const router=require('express').Router()
const {fetchUser}=require('../middleware/fetchuser')
const {signupUser}=require('../controllers/user_hand')
const{loginUser}=require('../controllers/user_hand')
const{getUser}=require('../controllers/user_hand')
//Routes
router.post('/signup',signupUser)
router.post('/login',loginUser)
router.get('/user',fetchUser,getUser)

module.exports=router