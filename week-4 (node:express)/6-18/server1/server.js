const http = require("http");
const querystring = require("querystring");

const server = http.createServer();

// let song = {
// 	name: "",
// 	song_leng: "",
// };

let legal_songs = [{ name: "Buddy Holly", length: 600 }];

server.on("request", (request, response) => {
	//if they aren't asking for a legal-song,
	//send a 404
	if (request.url !== "/legal-songs") {
		response.statusCode = 404;
		response.write("Whatever you are looking for, it's not here.");
		response.end();
		return;
	}

	switch (request.method) {
		//get all legal songs, send all of them as JSON data
		case "GET":
			response.statusCode = 200;
			//set header so client know's body is JSON
			response.setHeader("Content-Type", "application/json");
			//set up body to be JSON
			response.write(JSON.stringify(legal_songs));
			//send response
			response.end();
			break;

		case "POST":
			let chunks = "";
			request.on("data", (chunk) => {
				chunks += chunk.toString();
			});

			request.on("end", () => {
				console.log(chunks);
				let parsedData = querystring.parse(chunks);
				console.log(parsedData);
				legal_songs.push(parsedData);
				response.statusCode = 201;
				response.write("Created");
				response.end();
			});

			break;

		default:
			response.statusCode = 404;
			response.write("Not valid method for legal-strings");
			response.end();
	}

	console.log("Got a request");
});

server.listen(8080, () => {
	console.log("Server is running on http://localhost:8080");
});
