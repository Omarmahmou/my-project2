<template>
  <div class="footer-section">
    <h5 class="footer-title">{{ title }}</h5>

    <ul class="footer-list">
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-title {
  color: #fff;
  font-size: 13px;
  margin-bottom: 8px;
  font-weight: 400;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-list a {
  color: #fff;
  text-decoration: none;
  font-size: 13px;
}

.footer-list a:hover {
  text-decoration: underline;
}
</style>
