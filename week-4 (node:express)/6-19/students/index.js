// Did you restart your server?
// Make your server with express

const express = require("express");
const app = express();

// define a student's collection
// it might be a good idea to have a single student in it
// student = {name: "student_name", major: "student_major"}
//
let student = [{ name: "alec searle", major: "Software Engineering" }];

// use MiddleWare
app.use(express.urlencoded({ extended: true }));

// make a GET endpoint for students that returns the json of your students
// collection
// If you get a COR's error you might want to see if you are setting the
// Access-Control-Allow-Origin header to the right value
//
app.get("/students", (request, response) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.json(student);
});

// Make a POST endpoint for students
// add the new student to your collection
// You might find it helpful to set the CORS header
// You might want to see how the request.body looks and check to see if you are
// using a setting used in the express example
app.post("/students", (request, response) => {
	console.log(request.body);
	const data = request.body;

	let newStudent = {
		name: data.name,
		major: data.major,
	};

	student.push(newStudent);
	response.status(201).send("Added new Student");
});

// start your server on whatever port you want

app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
