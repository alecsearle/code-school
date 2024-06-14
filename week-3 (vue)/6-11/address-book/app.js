Vue.createApp({
	data() {
		return {
			name: "",
			email: "",
			recordName: null,
			recordEmail: null,
			history: [],
			isEditing: false,
			editingIndex: -1,
		};
	},
	methods: {
		addAddress: function () {
			(this.recordName = this.name), (this.recordEmail = this.email);

			this.history.push({
				name: this.recordName,
				email: this.recordEmail,
			});

			this.name = "";
			this.email = "";
		},
		deleteAddress: function (index) {
			this.history.splice(index, 1);
		},
		editAddress: function (index) {
			this.editingIndex = index;
			let address = this.history[index];
			this.name = address.name;
			this.email = address.email;
			this.isEditing = true;
		},
		saveEdit: function () {
			let address = this.history[this.editingIndex];
			address.name = this.name;
			address.email = this.email;
			this.name = "";
			this.email = "";
			this.isEditing = false;
			this.editingIndex = -1;
		},
	},
	created: function () {
		console.log("vue app loaded");
	},
}).mount("#app");
