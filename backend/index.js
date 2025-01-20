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

const allowedorigin=[
  'http://localhost:3000' , //local frontend
  'https://stalwart-cupcake-14bc19.netlify.app/'
]
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman) or from allowed origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    credentials: true, // Allow cookies and headers like authorization
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  })
);
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

//budget routes
app.use('/budget',budgetRouter)
  
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })