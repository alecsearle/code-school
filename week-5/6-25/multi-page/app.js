Vue.createApp({
	data() {
		return {
			page: 1,
		};
	},
	methods: {
		setPage: function (page) {
			this.page = page;
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
