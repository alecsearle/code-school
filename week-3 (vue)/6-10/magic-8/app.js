Vue.createApp({
	data() {
		return {
			answer: "",
			question: "",
			answerBank: ["Yes", "No", "Not Probable", "Can't answer", "Possibly"],
		};
	},
	methods: {
		askQuestion: function () {
			if (!this.isValidQuestion()) return;
			console.log(this.question);
			let index = Math.floor(Math.random() * this.answerBank.length);
			this.answer = this.answerBank[index];

			this.question = "";
			console.log("not vaid");
		},
		isValidQuestion: function () {
			return this.question[this.question.length - 1] === "?";
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
