const mongoose = require("mongoose");
mongoose.connect(process.env.DBPASSWORD);
// node --env-file=.env model.js

const StudentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Student must have name"],
	},
	major: {
		type: String,
		required: [true, "Student must have major"],
	},
	age: {
		type: Number,
		required: false,
	},
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = {
	Student: Student,
};
