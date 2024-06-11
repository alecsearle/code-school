Vue.createApp({
	data() {
		return {
			answer: "",
			question: "",
			answerBank: ["Yes", "No", "Not Probable", "Can't answer", "Possibly"],
			history: [],
		};
	},
	methods: {
		askQuestion: function () {
			if (!this.isValidQuestion()) return;
			console.log(this.question);
			let index = Math.floor(Math.random() * this.answerBank.length);
			this.answer = this.answerBank[index];

			this.history.push({
				question: this.question,
				answer: this.answer,
			});
			this.question = "";
			console.log("not vaid");
		},
		isValidQuestion: function () {
			return (
				this.question[this.question.length - 1] === "?" &&
				this.question.length > 2
			);
		},
		deleteItem: function (index) {
			this.history.splice(index, 1);
		},
		onEnterClick: function () {
			alert("Enter was pressed");
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
