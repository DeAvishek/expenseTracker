const router=require('express').Router()
const{createExpense}=require('../controllers/expense_hand')
const {allExpenses}=require('../controllers/expense_hand')
const {updateExpense}=require('../controllers/expense_hand')
const {delExpense}=require('../controllers/expense_hand')
const {getCategoryWithAmount}=require('../controllers/expense_hand')
const {fetchUser}=require('../middleware/fetchuser') //middleware
//Routes
router.post('/addexpense',fetchUser,createExpense)
router.get('/allexpenses',fetchUser,allExpenses)
router.patch('/updateexpense/:id',fetchUser,updateExpense)
router.delete('/deleteexpense/:id',fetchUser,delExpense)
router.get('/category-totalamount',fetchUser,getCategoryWithAmount)

module.exports=router