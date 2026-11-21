const express = require("express");
const router = express.Router();

const {
getAllStudents,
getStudentById,
updateStudent,
deleteStudent,
createStudent
} = require("../controllers/studentController");

// CRUD endpoints
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;