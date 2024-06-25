Vue.createApp({
	data() {
		return {
			newColor: {
				red: 0,
				green: 0,
				blue: 0,
			},
			palette: [],
		};
	},
	methods: {
		addColor: function () {
			this.palette.push(this.rgbString);
		},
	},
	computed: {
		rgbString() {
			return `rgb(${this.newColor.red}, ${this.newColor.green}, ${this.newColor.blue})`;
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
