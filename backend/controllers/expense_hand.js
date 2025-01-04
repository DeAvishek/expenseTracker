const expense = require('../models/expensemodel')

const createExpense = async (req, res) => {
    try {
        const { amount, category, description } = req.body
        const userId = req.user._id;
        if (!amount || !category || !description) {
            return res.status(400).json({ error: "missing required fields" })
        }
        const newExpense = await expense.create({
            amount,
            category,
            description,
            user: userId
        })
        return res.status(201).json(newExpense) 
    } catch (error) {
        res.status(500).json({ error: error.message })
    }   
}

module.exports = { createExpense }