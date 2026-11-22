const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

app.use(express.json())

const authRoutes = require('./routes/authRoutes')
const { db } = require("./models/user")
app.use('/api', authRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch((err) => console.error(err));

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})