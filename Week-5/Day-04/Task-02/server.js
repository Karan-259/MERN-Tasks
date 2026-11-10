const express = require("express")

const app = express()

app.use(express.json())

const logger = require('./middleware/logger')
app.use(logger)


const routes = require("./routes/routes")
app.use("/api/",routes)

// app.get("/", (req, res) => {
//     res.json("Home Page")
// })

app.listen(4000, () => {
    console.log("Server is up and listening on http://localhost:4000")
})