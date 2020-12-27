const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//import routes
const authRoute = require('./routes/auth')

dotenv.config()

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true},
    ()=> console.log('Connected to db!')
)

//Middleware
app.use(express.json())

//route middelwares
app.use('/api/user', authRoute)


app.listen(9000, ()=> console.log("Server up and running"))