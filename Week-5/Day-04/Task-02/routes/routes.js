const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.json("This is Home page")
})

module.exports = routes