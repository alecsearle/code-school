const mongoose = require("mongoose");
mongoose.connect(process.env.DBPASSWORD);
// node --env-file=.env model.js

const ExpenseSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: [true, "Expense must have category"],
		},
		amount: {
			type: Number,
			required: [true, "Expense must have amount"],
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Expense = mongoose.model("Schema", ExpenseSchema);

module.exports = {
	Expense: Expense,
};
