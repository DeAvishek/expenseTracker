const router=require('express').Router()
const {fetchUser}=require('../middleware/fetchuser')
const{getMonthSummary}=require('../controllers/monthsummary_hand')

//month summary routes
router.get('/monthsummary',fetchUser,getMonthSummary)

module.exports=router

