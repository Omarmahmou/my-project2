<template>
  <div class="contaier">
    <h2>Todo App</h2>

    <div class="input-section">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add task" />
      <button @click="addTask">Add</button>
    </div>

    <p v-if="tasks.length === 0" class="empty">No tasks yet</p>

    <ul v-else>
      <li v-for="task in tasks" :key="task.id">
        <span :class="{ completed: task.completed }">
          {{ task.title }}
        </span>
        <button @click="deleteTask(task.id)">Delete</button>
        <button @click="completedTask(task.id)">completed</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },

  methods: {
    addTask() {
      if (!this.newTask.trim()) return;

      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false,
      });

      this.newTask = "";
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },

    completedTask(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
        console.log(task);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 50px auto;
  font-family: Arial;
}

.input-section {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  width: 70%;
}

button {
  padding: 8px;
  margin-left: 5px;
  cursor: pointer;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
