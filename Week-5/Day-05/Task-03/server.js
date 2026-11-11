require('dotenv').config()

const express = require('express')
const app = express()

const router = require('./routes/userRoute')

app.use(express.json())

const logger = require('./utils/logger')
app.use(logger)

app.use('/api/users', router)

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
    console.log(`Sever is listening on http://localhost:${Port}`)
})