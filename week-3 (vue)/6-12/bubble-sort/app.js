Vue.createApp({
	data() {
		return {
			array: [24, 543, 1, 34, 444, 54, 67, 8765, 4],
		};
	},
	methods: {
		bubbleSort: function () {
			for (let i = 0; i < this.array.length; i++) {
				for (let j = 0; j < this.array.length - i - 1; j++) {
					if (this.array[j] > this.array[j + 1]) {
						let temp = this.array[j];
						this.array[j] = this.array[j + 1];
						this.array[j + 1] = temp;
					}
				}
			}
			console.log(this.array);
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
