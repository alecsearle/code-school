Vue.createApp({
  data() {
    return {
      test: "testing",
    };
  },
  methods: {},
  created: function () {
    console.log("vue app loaded");
  },
}).mount("#app");
