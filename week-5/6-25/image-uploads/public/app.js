const URL = "http://localhost:8080";

Vue.createApp({
	data() {
		return {
			title: "",
			content: "",
			image: null,
			posts: [],
		};
	},
	methods: {
		handleFileUpload: function (event) {
			console.log(event.target.files);
			this.image = event.target.files[0];
		},

		createPost: async function () {
			const formData = new FormData();
			formData.append("title", this.title);
			formData.append("content", this.content);
			formData.append("image", this.image);

			let requestOption = {
				method: "POST",
				body: formData,
			};
			let response = await fetch(`${URL}/posts`, requestOption);
			const data = await response.json();
			this.posts.push(data);
		},

		getPosts: async function () {
			let response = await fetch(`${URL}/posts`);
			let data = await response.json();
			this.posts = data;
			console.log(data);
		},
	},
	created: function () {
		console.log("vue app loaded");
		this.getPosts();
	},
}).mount("#app");
