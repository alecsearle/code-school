Vue.createApp({
	data() {
		return {
			name: "User",
			colors: ["aquamarine", "coral", "cadetblue"],
			activeColor: "#fff",
			inputName: "",
		};
	},
	methods: {
		changeName: function () {
			this.name = this.inputName;
			this.inputName = "";
		},
		changeColor: function (color) {
			this.activeColor = color;
		},
	},
	created: function () {},
}).mount("#app");
