const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter=require('./routes/user_route')
const expenseRouter=require('./routes/expense_route')
const monthSummaryRouter=require('./routes/monthsummary_route')
const budgetRouter=require('./routes/budget_route')
const cors=require('cors')
require('dotenv').config()
const port = process.env.PORT

const allowedOrigins = [
  'http://localhost:3000',  // Development URL
  'https://expneses-tracker.netlify.app'
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Block the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'bearer'], // Include appropriate headers
  credentials: true // Allow credentials like cookies if needed
}));
//midddleware for parse the json
app.options('*', cors());
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

//budget routes
app.use('/budget',budgetRouter)
  
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })