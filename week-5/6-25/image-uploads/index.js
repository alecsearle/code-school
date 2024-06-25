const express = require("express");
const multer = require("multer");
const model = require("./model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// pulls files under public folder
app.use(express.static("public"));
app.use(express.json({ limit: "10mb" }));

// setting up multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/posts", upload.single("image"), async (req, res) => {
	const { title, content } = req.body;
	const imageType = req.file.mimetype;
	const imageBase64 = req.file.buffer.toString("base64");

	const newPost = new model.Post({
		title,
		content,
		image: imageBase64,
		imageType,
	});

	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (error) {
		res.status(400).json("Error: " + error);
	}
});

app.get("/posts", async (req, res) => {
	try {
		const posts = await model.Post.find();
		res.status(200).json(posts);
	} catch (error) {
		res.status(404).json("Error: " + error);
	}
});

app.listen(PORT, () => {
	console.log(`Server running: http://localhost:${PORT}`);
});
