const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@gmail.com',
      gender: 'male',
      nickname: 'johndoe',
      location: 'Canada',
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
      this.nickname = results[0].login.username;
      this.location = results[0].location.country;
    },
  },
});

app.mount('#app');
