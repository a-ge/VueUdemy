const app = Vue.createApp({
  data() {
    return {
      name: 'Tina',
      age: 12,
      imageURL: 'http://www.mwctoys.com/images1/review_talktina_3.jpg'
    };
  },
  methods: {
    calcAge() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');
