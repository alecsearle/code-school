const URL = "https://expenses.codeschool.cloud";

Vue.createApp({
	data() {
		return {
			expenses: [],
			sortOrder: "",
			searchInput: "",
		};
	},
	methods: {
		getExpenses: async function () {
			let response = await fetch(`${URL}/expenses`);
			let data = await response.json();
			this.expenses = data;
			console.log(data);
		},
		sortExpenses: function () {
			if (this.sortOrder == "asc") {
				function compare(a, b) {
					if (a.amount > b.amount) return -1;
					if (a.amount < b.amount) return 1;
					return 0;
				}
				this.sortOrder = "desc";
			} else {
				function compare(a, b) {
					if (a.amount < b.amount) return -1;
					if (a.amount > b.amount) return 1;
					return 0;
				}
				this.sortOrder = "asc";
			}
			this.expenses.sort(compare);
		},
	},
	computed: {
		balance: function () {
			let total = 0;
			for (expense of this.filteredExpenses) {
				total += expense.amount;
			}
			return total;
		},
		filteredExpenses: function () {
			return this.expenses.filter((expense) => {
				return expense.description
					.toLowerCase()
					.includes(this.searchInput.toLowerCase());
			});
		},
	},
	created: function () {
		this.getExpenses();
	},
}).mount("#app");
