const express = require("express");
const cors = require("cors");
const model = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/employees", async function (request, response) {
	try {
		let employees = await model.Employee.find();
		response.send(employees);
	} catch (error) {
		response.status(404).send("employees not found");
	}
});

app.get("/companies", async function (request, response) {
	try {
		let companies = await model.Company.find()
			.populate("owner")
			.populate("employees");
		response.send(companies);
	} catch (error) {
		response.status(404).send("company not found");
	}
});

app.post("/employees", async (request, response) => {
	try {
		let newEmployee = await new model.Employee({
			email: request.body.email,
			name: request.body.name,
			jobTitle: request.body.jobTitle,
			pay: request.body.pay,
		});

		const error = await newEmployee.validateSync();

		if (error) {
			response.status(422).send(error);
			return;
		}
		await newEmployee.save();
		response.status(201).send("good work");
	} catch (error) {
		response.status(500).send("server error");
	}
});

app.post("/companies", async (request, response) => {
	try {
		let newCompany = await new model.Company({
			name: request.body.name,
			employees: request.body.employees,
			owner: request.body.owner,
		});

		const error = await newCompany.validateSync();

		if (error) {
			response.status(422).send(error);
			return;
		}
		await newCompany.save();
		response.status(201).send("good work");
	} catch (error) {
		response.status(500).send("server error");
	}
});

app.listen(8080, function () {
	console.log("server is running on http://localhost:8080");
});
