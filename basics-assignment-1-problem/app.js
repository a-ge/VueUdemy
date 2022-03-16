const app = Vue.createApp({
  data() {
    return {
      name: 'Tina',
      age: 12
    };
  },
  methods: {
    calcAge() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');
