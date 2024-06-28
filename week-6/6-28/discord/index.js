const express = require("express");
const cors = require("cors");
const model = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", async (request, response) => {
	try {
		let users = await model.User.find({}, { password: 0 });
		response.send(users);
	} catch (error) {
		response.status(500).send("Server error");
	}
});

app.post("/users", async (request, response) => {
	try {
		let newUser = await new model.User({
			email: request.body.email,
			name: request.body.name,
			username: request.body.username,
			account_age: request.body.account_age,
		});
		await newUser.hashPassword(request.body.password);

		// server-side validation
		// make sure the request.body has the right data
		const error = await newUser.validateSync();

		if (error) {
			response.status(422).send(error);
			return;
		}

		await newUser.save();
		response.status(201).send("You're a-okay");
	} catch (error) {
		response.status(500).send("Server error");
	}
});

app.get("/games", async (request, response) => {
	try {
		let games = await model.Game.find();
		response.send(games);
	} catch (error) {
		response.status(500).send("Server error");
	}
});

app.post("/games", async (request, response) => {
	try {
		let newGame = await new model.Game({
			name: request.body.name,
			hours: request.body.hours,
		});

		const error = await newGame.validateSync();

		if (error) {
			response.status(422).send(error);
			return;
		}

		await newGame.save();
		response.status(201);
	} catch (error) {
		response.status(500).send("Server error");
	}
});

app.listen(8080, function () {
	console.log("server is running on http://localhost:8080");
});
