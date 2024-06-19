// Did you restart your server?
// Make your server with express

const express = require("express");
const app = express();
const model = require("./model");

app.use(express.urlencoded({ extended: true }));

app.get("/students", async (request, response) => {
	// get data from mongoDB
	let students = await model.Student.find();
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.json(students);
});

app.post("/students", (request, response) => {
	const data = request.body;

	// create a new MongoStudent using our model

	let newStudent = new model.Student({
		name: data.name,
		major: data.major,
	});

	newStudent
		.save()
		.then(() => {
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.status(201).send("Created");
		})
		.catch(() => {
			response.status(400).send("Something failed when making a student");
		});
});

app.delete("/students/:id", (req, res) => {
	console.log("DELETE for single student");
	console.log(req.params.id);
	model.Student.findOneAndDelete({ _id: req.params.id })
		.then((student) => {
			if (student) {
				res.status(200).send("Removed");
			} else {
				console.log("Student not found.");
				res.status(404).send("Student not found.");
			}
		})
		.catch(() => {
			console.log("Bad request (GET by ID).");
			res.status(400).send("Student not found.");
		});
});

app.get("/students/:id", (request, response) => {
	model.Student.findOne({ _id: request.params.id }).then((student) => {
		if (student) {
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.json(student);
		} else {
			response.status(404).send("Student has not been found");
		}
	});
});

app.put("/students/:id", (request, response) => {
	const updatedStudent = {
		name: request.body.name,
		major: request.body.major,
	};
	console.log(request.params.id);
	model.Student.findByIdAndUpdate({ _id: request.params.id }, updatedStudent, {
		new: true,
	}).then((student) => {
		if (student) {
			response.status(204).send("Student updated");
		} else {
			response.status(404).send("Student is not found");
		}
	});
});

// start your server on whatever port you want
app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
