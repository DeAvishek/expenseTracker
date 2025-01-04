const express = require('express')
const mongoose = require('mongoose')
const app = express()
const userRouter=require('./routes/user_route')
require('dotenv').config()
const port = process.env.PORT

//midddleware for parse the json
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

  //Routes include
app.use('/',userRouter)
  
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })