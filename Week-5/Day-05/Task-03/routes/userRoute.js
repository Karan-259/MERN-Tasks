const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define routes here
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.get("/:id/:section", (req, res) => {
    const { id, section } = req.params;
    res.json({
        userId: id,
        section: section
    });
});

module.exports = router;