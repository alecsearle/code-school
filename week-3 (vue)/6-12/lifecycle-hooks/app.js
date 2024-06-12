Vue.createApp({
	data() {
		return {
			inputName: "",
			username: "User",
			colors: ["aquamarine", "coral", "cadetblue"],
			activeColor: "#fff",
		};
	},
	methods: {
		enterName: function () {
			this.username = this.inputName;
		},
		changeColor: function (color) {
			this.activeColor = color;
		},
	},
	// Called right after the instance has been initialized
	// but before data obswervation starts. Rarely used directly
	beforeCreate: function () {
		console.log("beforeCreate");
	},
	// Called after the instance is initialized
	// data obswervation is happening. Great place to fetch data
	created: function () {
		console.log("created");
	},
	// Called right before mounting begins, the render function is about to be
	// called for the first time
	beforeMount: function () {
		console.log("beforeMount");
	},
	// Called after the component has been mounted to the DOM
	// Good place to access DOM elements
	mounted: function () {
		console.log("mounted");
	},
	// Called when data has changed but before DOM has re-rendered
	beforeUpdate: function () {
		console.log("beforeUpdate");
	},
	// Called after the DOM has been re-rendered
	// Use this for action that depend on the DOM
	updated: function () {
		console.log("updated");
	},
}).mount("#app");
