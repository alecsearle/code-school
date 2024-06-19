const express = require("express");
const app = express();
const model = require("./model");

app.use(express.urlencoded({ extended: true }));

app.get("/expenses", async (request, response) => {
	let expenses = await model.Expense.find();
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.json(expenses);
});

app.post("/expenses", (request, response) => {
	const data = request.body;

	let newExpense = new model.Expense({
		category: data.category,
		amount: data.amount,
		description: data.description,
	});

	newExpense
		.save()
		.then(() => {
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.status(201).send("Added");
		})
		.catch(() => {
			response.status(400).send("Something failed when adding expense");
		});
});

app.delete("/expenses/:id", (req, res) => {
	console.log("Delete for single expense");
	console.log(req.params.id);
	model.Expense.findOneAndDelete({ _id: req.params.id })
		.then((expense) => {
			if (expense) {
				res.status(200).send("Removed");
			} else {
				console.log("Expense not found");
				res.status(404).send("Expense not found");
			}
		})
		.catch(() => {
			console.log("Bad request (GET by ID.");
			res.status(400).send("Expense not found");
		});
});

// start your server on whatever port you want
app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
