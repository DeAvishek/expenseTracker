const router=require('express').Router()
const{createBudget}=require('../controllers/budget_hand')
const{getTotalBudget}=require('../controllers/budget_hand')
const{fetchUser}=require('../middleware/fetchuser')

//budget routes
router.post('/add-budget',fetchUser,createBudget)
router.get('/get-budget',fetchUser,getTotalBudget)
module.exports=router