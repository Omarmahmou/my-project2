<template>
  <li>
    {{ user.name }} -- {{ user.email }}
    <button @click="$emit('delete-request', user)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
