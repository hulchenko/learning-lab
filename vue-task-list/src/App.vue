<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task List"
      :showAddTask="showAddTask"
    />
    <!--passing value from App.vue file to view files-->
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  max-width: 500px;
  margin: 5rem auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid green;
  padding: 30px;
  border-radius: 5px;
  user-select: none;
}

.container p {
  font-size: 12px;
}

.note {
  text-align: center;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:hover {
  transform: scale(1.01);
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.99);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
