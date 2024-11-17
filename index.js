const express = require("express")

const dotenv = require('dotenv')
const { connectToMongoDB } = require('./connect')
const { authRouter } = require('./route/auth.js')

const app = express()
const PORT = 3000

dotenv.config()

const MongoURI  = process.env.MONGO_URI

connectToMongoDB(MongoURI);

app.use(express.json())
app.use('/api/auth', authRouter)
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})