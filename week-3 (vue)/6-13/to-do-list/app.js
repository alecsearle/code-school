Vue.createApp({
	data() {
		return {
			description: "",
			category: "",
			searchInput: "",
		};
	},
	methods: {
		addTodo: function () {
			this.description;
			this.category;
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
