Vue.createApp({
	data() {
		return {
			test: "hello world",
			expenses: [],
		};
	},
	methods: {
		// getExpenses: function () {
		// 	fetch("data.json").then((response) => {
		// 		response.json().then((data) => {
		// 			console.log(data);
		// 			this.expenses = data;
		// 		});
		// 	});
		// },
		getExpenses: async function () {
			let response = await fetch("data.json");
			let data = await response.json();
			this.expenses = data;
			console.log(data);
		},
	},
	created: function () {
		console.log("vue app loaded");
		this.getExpenses();
	},
}).mount("#app");
