Vue.createApp({
	data() {
		return {
			kiloBytes: "",
			bytes: "",
			convertedBytes: null,
			convertedMegabits: null,
		};
	},
	methods: {
		convertToB: function () {
			this.convertedBytes = parseInt(this.kiloBytes) * 1024 + " B";
			this.kiloBytes = "";
		},
		convertToMb: function () {
			this.convertedMegabits = parseInt(this.bytes) * 0.000001 + " Mb";
			this.bytes = "";
		},

		validNum: function (num) {
			return num.length > 0 && !isNaN(num);
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
