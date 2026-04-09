<template>
  <div id="app">
    <userList
      :users="users"
      :Loading="Loading"
      @fetch-users="fetchUsers"
      @delete-user="deleteUser"
      @delete-all="deleteAll"
    />
  </div>
</template>

<script>
import axios from "axios";
import userList from "./components/userList";

export default {
  components: {
    userList,
  },
  data() {
    return {
      users: [],
      Loading: true,
      counter: 3,
      lastDeletedUser: null,
    };
  },

  methods: {
    async fetchUsers() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        this.users = res.data;
      } catch (err) {
        console.log(err);
      } finally {
        this.Loading = false;
      }
    },
    deleteUser(user) {
      this.lastDeletedUser = user;
      this.users = this.users.filter((u) => u.id !== user.id);
    },
    deleteAll() {
      this.users = [];
    },
  },
  watch: {
    lastDeletedUser(newVal) {
      if (newVal) {
        alert(`delete user ${newVal.name}`);
      }
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.counter--;

      if (this.counter <= 0) {
        clearInterval(this.interval);
        this.fetchUsers();
      }
    }, 1000);
  },
};
</script>
