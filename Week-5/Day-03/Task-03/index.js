import express from 'express'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express API is working...");
});

app.get("/about", (req, res) => {
    res.send("This is the About page!");
});

app.post("/contact", (req, res) => {
    res.send("Contact form submitted!");
});

app.get("/api/user", (req, res) => {
    res.json({
        id: 1,
        name: "Ananya",
        role: "Intern",
        skills: ["Node.js", "Express.js", "Git"]
    });
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});

app.get("/search", (req, res) => {
    const query = req.query;
    res.json(query);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});