const express = require("express")
const dotenv = require('dotenv')

const app = express()

dotenv.config()

const Port = process.env.Port

app.use(express.json())

app.listen(Port, () => {
    console.log(`Server is up and listening on http://localhost:${Port}/`)
})