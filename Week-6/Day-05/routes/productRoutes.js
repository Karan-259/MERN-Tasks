const express = require("express");
const Order = require('../models/Order')
const User = require('../models/User')
const router = express.Router();

router.post("/user", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/order", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/orders", async (req, res) => {
    try {
        const data = await Order.find().populate("user", "name email");
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
