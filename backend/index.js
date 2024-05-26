const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const authentication = require('./routes/authentication')
const authorization = require('./routes/authorization')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');
const ConnectMongo = require('./connection/dbconnection')
 app = express()

app.use(cookieParser());
dotenv.config()
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:4200', // the origin of your Angular app
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };
app.use(cors(corsOptions))

ConnectMongo()
app.use('/auth', authentication)
app.use('/protect', authorization)

app.listen(process.env.PORT,()=>console.log(`Server is runnning ${process.env.PORT}`))