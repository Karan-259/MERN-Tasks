const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String
    },
    duration: {
        type: String
    }
});

module.exports = mongoose.model("Course", courseSchema);