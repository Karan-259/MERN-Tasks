const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rollNo: { type: Number, required: true, unique: true },
        department: { type: String, required: true },
        year: { type: Number, required: true },
        email: { type: String, required: true, unique: true },
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);