const APILINK = "https://official-joke-api.appspot.com/jokes/ten";

Vue.createApp({
	data() {
		return {
			curSetup: "",
			curPunchline: "",
			jokes_list: null,
		};
	},
	methods: {
		getJokes: async function () {
			let res = await fetch(APILINK);
			let data = await res.json();
			this.jokes_list = data;
			console.log(this.jokes_list);
		},
		newJoke: function () {
			let joke = Math.floor(Math.random() * this.jokes_list);
			curSetup = this.jokes_list[joke].setup;
			curPunchline = this.jokes_list[joke].punchline;
			console.log(joke);
			console.log(curSetup);
			console.log(curPunchline);
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
