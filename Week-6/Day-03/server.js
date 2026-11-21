require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Built-in Middleware
app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully "))
    .catch((err) => console.log("MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
    res.send("Server Running & MongoDB Connected ✔");
});

// Custom Middleware
// const logger = require("./middleware/logger");
// app.use(logger);
// const userRoutes = require("./routes/userRoutes");
// app.use("/users", userRoutes);

const studentRoutes = require("./routes/StudentRoutes");
app.use("/students", studentRoutes);

// Error Handling Middleware (Last)
// Must have 4 parameters
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
// Get PORT from environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});