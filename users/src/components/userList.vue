<template>
  <div>
    <div class="buttons">
      <button @click="$emit('fetch-users')">Fetch users</button>
      <button @click="$emit('delete-all')">Delete All</button>
    </div>

    <loaderApp v-if="Loading" />
    <ul v-else>
      <userItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        @delete-request="$emit('delete-user', $event)"
      />
    </ul>
  </div>
</template>
<script>
import userItem from "./userItem";

import loaderApp from "./loaderApp.vue";

export default {
  components: { userItem, loaderApp },

  props: {
    users: Array,
    Loading: Boolean,
  },
};
</script>
