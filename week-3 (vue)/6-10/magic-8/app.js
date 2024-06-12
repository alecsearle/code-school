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
      //   console.log("valid question");
      let index = Math.floor(Math.random() * this.answerBank.length);
      this.answer = this.answerBank[index];

      this.question = "";
      console.log("valid question");
    },
    isValidQuestion: function () {
      return (
        this.question[this.question.length - 1] === "?" &&
        this.question.length > 2
      );
    },
  },
  created: function () {
    console.log("vue app loaded");
  },
}).mount("#app");
