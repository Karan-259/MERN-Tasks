const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connection established"))
    .catch((error) => console.log("Error connecting:", error));

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is up and listening on http://localhost:${PORT}`)
})