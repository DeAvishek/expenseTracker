const Expense = require('../models/expensemodel');
const User=require('../models/usermodel')
const MonthSummary=require('../models/monSummarymodel')
//@Log in required
const createExpense = async (req, res) => {
    try {
        const { amount, category, description } = req.body
        const userId = req.user._id;
        
        // Add data validation
        if (!amount || amount <= 0) {
            return res.status(400).json({ error: "Amount must be greater than 0" })
        }
        if (!category || !description) {
            return res.status(400).json({ error: "Category and description are required" })
        }

        // Trim whitespace from strings
        const newExpense = await Expense.create({
            amount,
            category,
            description,
            userId: userId
        })
       
        const expenseDate=newExpense.date
        const month=expenseDate.getMonth()+1//js month are 0-based
        const year=expenseDate.getFullYear()

       await MonthSummary.findOneAndUpdate({
            userId: userId,
            month: month,
            year: year
        },
        {
            $inc:{totalExpense:amount} //increment the total expense by amount
        },
        {
            upsert:true,
            new:true
        }
    )
         


        return res.status(201).json({success:true,newExpense}) 
    } catch (error) {
        // Add more specific error handling
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message })
        }
        // console.log(error)
        res.status(500).json({ error: "Server error while creating expense" })
    }   
}
//@Log in required
const allExpenses = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ error: "no user found" });
        }
        // Fix: Query expenses with the correct userId filter
        const expenses = await Expense.find({ userId: userId });
        
        if (!expenses || expenses.length <= 0) {
            return res.status(200).json({ success: true, message: "no expenses" });
        }
        return res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
//@Log in required
const updateExpense = async (req, res) => {
    try {
        const { amount, category, description } = req.body;
        const expenseId = req.params.id;
        const userId = req.user._id;

        // Validate expense exists and belongs to user
        const expense = await Expense.findOne({ _id: expenseId, userId: userId });
        if (!expense) {
            return res.status(404).json({ error: "Expense not found or unauthorized" });
        }

        // Validate update data
        if (amount && amount <= 0) {
            return res.status(400).json({ error: "Amount must be greater than 0" });
        }

        // Update the expense
        const updatedExpense = await Expense.findByIdAndUpdate(
            expenseId,
            { 
                ...(amount && { amount }),
                ...(category && { category }),
                ...(description && { description })
            },
            { new: true, runValidators: true }
        );

        return res.status(200).json(updatedExpense);
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: "Server error while updating expense" });
    }
}
//@Log in required
const delExpense=async(req,res)=>{
    try {
        const expenseId = req.params.id;
        const userId = req.user._id;
    
        // Validate expense exists and belongs to user
        const expense = await Expense.findOne({ _id: expenseId, userId: userId });
        if (!expense) {
            return res.status(404).json({ error: "Expense not found or unauthorized" });
        }
    
        await Expense.findByIdAndDelete(expenseId)
        return res.status(200).json({success:true,message:"deleted successfully"})
    } catch (error) {
        return res.status(500).json({ error: "Server error while deleting expense" });
    }
}
// @login required
const getCategoryWithAmount=async(req,res)=>{
    try{
        const userId=req.user._id
        const user=User.findById(userId)
        if (!user) {
            return res.status(400).json({ error: "no user found" });
        }
        const result= await Expense.aggregate([
            {
                $group:{
                    _id:"$category",
                    totalExpense: { $sum: "$amount" }
                }
            }
        ])
        return res.status(200).json({success:true,result})
    }catch(err){
        return res.status(500).json({ error: "Server error while deleting expense" });

    }
    
}

module.exports = { createExpense, allExpenses, updateExpense,delExpense,getCategoryWithAmount }