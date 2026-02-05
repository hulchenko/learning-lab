<template>
  <div v-show="showAddTask"><AddTask @add-task="addTask" /></div>
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    v-bind:tasks="tasks"
  />
  <p class="note">*double click to set/remove a reminder*</p>
</template>

<script>
import Tasks from '../components/Tasks';
import AddTask from '../components/AddTask';
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean, //passing value from App.vue file to view files
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return { tasks: [] };
  },
  methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        });
        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error');
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const res = await fetch('api/tasks'); //api path defined in vue config js file
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
