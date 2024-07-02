// install packages
const express = require("express");
const cors = require("cors");
const model = require("./model");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", async function (req, res) {
	try {
		let users = await model.User.find();
		res.send(users);
	} catch (error) {
		res.status(404).send("Users not found.");
	}
});

app.post("/users", async (req, res) => {
	try {
		let newUser = await new model.User({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
		});
		await newUser.setPassword(req.body.password);
		const error = await newUser.validateSync();

		if (error) {
			res.status(422).send(error);
			return;
		}

		await newUser.save();
		res.status(201).send("good work");
	} catch (error) {
		res.status(500).send("server error");
	}
});

app.listen(8080, function () {
	console.log("server is running on http://localhost:8080");
});
