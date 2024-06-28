const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

mongoose.connect(process.env.DBPASSWORD);

const UserSchema = Schema({
	email: {
		type: String,
		required: [true, "User MUST have an email"],
	},
	name: {
		type: String,
		required: [true, "User MUST have a name"],
	},
	password: {
		type: String,
		required: [true, "User MUST have a password"],
	},
	username: {
		type: String,
		required: [true, "User MUST have a username"],
	},
	account_age: {
		type: Number,
	},
});

UserSchema.methods.hashPassword = async function (password) {
	try {
		let hashedPassword = await bcrypt.hash(password, 12);
		this.password = hashedPassword;
	} catch (error) {}
};

UserSchema.methods.verifyPassword = async function (password) {
	// first param is the plain password from user
	// second param is hashed password stored for user
	let isGood = await bcrypt.compare(password, this.password);
	return isGood;
};

const User = mongoose.model("User", UserSchema);

// GAMES SCHEMA
const GameSchema = Schema({
	name: {
		type: String,
		required: [true, "Game must have a name"],
	},
	hours: {
		type: Number,
	},
});

const Game = mongoose.model("Game", GameSchema);

module.exports = {
	User: User,
	Game: Game,
};
