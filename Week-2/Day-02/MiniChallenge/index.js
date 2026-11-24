const students = [
	{ name: "Aman", marks: 85 },
	{ name: "Sara", marks: 42 },
	{ name: "Riya", marks: 68 },
	{ name: "John", marks: 49 },
];

const passedStudents = students
	.filter((student) => student.marks >= 50)
	.map((student) => ({ ...student, finalScore: student.marks + 5 }));

passedStudents.forEach((student) => {
	console.log(`${student.name}: ${student.finalScore}`);
});

const classAverage = passedStudents.length
	? passedStudents.reduce((total, student) => total + student.finalScore, 0) /
		passedStudents.length
	: 0;

console.log(`Class average: ${classAverage.toFixed(2)}`);
