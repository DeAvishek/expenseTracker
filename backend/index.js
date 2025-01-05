const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter=require('./routes/user_route')
const expenseRouter=require('./routes/expense_route')
const monthSummaryRouter=require('./routes/monthsummary_route')
require('dotenv').config()
const port = process.env.PORT

//midddleware for parse the json
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

//Routes include..user Routes
app.use('/',userRouter)

//expenses Routes
app.use('/expense',expenseRouter)

//monthSummary routes
app.use('/',monthSummaryRouter)
  
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })