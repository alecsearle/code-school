const URL = "https://expenses.codeschool.cloud";

Vue.createApp({
	data() {
		return {
			list: [],
			searchInput: "",
			newTodo: {
				description: "",
				category: "",
			},
		};
	},
	methods: {
		addTodo: async function () {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
			let encodedData =
				"description=" +
				encodeURIComponent(this.newTodo.description) +
				"&category=" +
				encodeURIComponent(this.newTodo.category);

			let requestOptions = {
				method: "POST",
				body: encodedData,
				headers: myHeaders,
			};

			let response = await fetch(`${URL}/toDo`, requestOptions);

			if (response.status === 201) {
				let data = await response.json();
				this.list.push(data);
				this.newTodo.description = "";
				this.newTodo.category = "";
			} else {
				alert("Failed to add todo");
			}
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
