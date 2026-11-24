const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productName: String,
    amount: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Order", orderSchema);