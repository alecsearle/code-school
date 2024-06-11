Vue.createApp({
	data() {
		return {
			name: "",
			email: "",
			recordName: null,
			recordEmail: null,
			history: [],
		};
	},
	methods: {
		entry: function () {
			(this.recordName = this.name), (this.recordEmail = this.email);

			this.history.push({
				name: this.recordName,
				email: this.recordEmail,
			});

			this.name = "";
			this.email = "";
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
