import express from 'express'

const app = express()

app.use(express.json())

app.get("/api/user", (req, res) => {
    res.json({
        id: 1,
        name: "Ananya",
        role: "Intern",
        skills: ["Node.js", "Express.js", "Git"]
    });
});

app.listen(5000, () => {
    console.log("Server is listening on http://localhost:5000")
})