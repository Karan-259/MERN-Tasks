const express = require('express')
const logger = require('./utils/logger')
const router = require('./routes/userRoutes')

const app = express()

app.use(express.json())

app.use(logger)

app.use('/users', router)

app.listen(3000, ()=> {
    console.log("Server is listening on http://localhost:3000")
})
