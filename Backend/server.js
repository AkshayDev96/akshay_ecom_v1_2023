//configure dotENV 
require('dotenv').config()
const express = require('express')
const { connectDB } = require('./utils')
const app = express()
const cors = require('cors')



//middleware
//request json parser
app.use(cors())
app.use(express.json())
//for formData
app.use(express.urlencoded({ extended: true }))

app.use('/api',require('./routes'))


//PORT No
const PORT = process.env.PORT

//initialize server
connectDB()
.then((result)=>{
    console.log("DB_MESSAGE",result)
    app.listen(PORT,()=>{
        console.log(`Server is running ${PORT}, visit to http://localhost:${PORT}`)
    })
}).catch((e)=>console.log("DB_ERROR",e))
