// node --env-file=.env index.js
const cors = require("cors");
const express = require("express");
const app = express();
const model = require("./model");
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/expenses", async (request, response) => {
	try {
		let expenses = await model.Expense.find();
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.json(expenses);
	} catch (error) {
		console.log(error);
		response.status(400).send("Generic Error");
	}
});

app.post("/expenses", async (request, response) => {
	const data = request.body;
	try {
		let newExpense = new model.Expense({
			category: data.category,
			amount: data.amount,
			description: data.description,
		});

		let error = newExpense.validateSync();
		if (error) {
			response.status(400).json(error);
			return;
		}

		await newExpense.save();
		response.status(201).json(newExpense);
	} catch (error) {
		response.status(400).send("Generic Error");
	}
});

app.delete("/expenses/:id", async (req, response) => {
	try {
		console.log("Delete for single expense");
		console.log(req.params.id);
		let isDeleted = await model.Expense.findOneAndDelete({
			_id: req.params.id,
		});
		if (!isDeleted) {
			response.status(404).send("Could not find expense");
			return;
		}

		response.status(200).send("expense deleted");
	} catch (error) {
		response.status(400).send("Generic Error");
	}
});

app.put("/expenses/:id", async (request, response) => {
	try {
		const updatedExpense = {
			category: request.body.category,
			amount: request.body.amount,
			description: request.body.description,
		};
		let putExpense = await model.Expense.findByIdAndUpdate(
			{ _id: request.params.id },
			updatedExpense,
			{
				new: true,
			}
		);
		if (!putExpense) {
			response.status(404).send("Could not update expense");
			return;
		}
		response.status(204).json(putExpense);
	} catch (error) {
		response.status(400).send("Generic Error");
	}
});

// start your server on whatever port you want
app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
