// npm init
// npm install express

const express = require("express");
const app = express();

let guest_info = [{ name: "Alec", address: "211 W 100 S" }];

app.use(express.urlencoded({ extended: true }));

// GET for guest_info
app.get("/guest-info", (request, response) => {
	response.json(guest_info);
});

// POST for guest_info
app.post("/guest-info", (request, response) => {
	console.log(request.body);
	const data = request.body;

	let newGuest = {
		name: data.name,
		address: data.address,
	};

	guest_info.push(newGuest);
	response.status(201).send("Added new Guest");
});

app.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
