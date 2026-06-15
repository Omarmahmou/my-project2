<template>
  <nav class="nav">
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: "السيراميك والبورسلان",
        },
        {
          id: 2,
          title: "الأدوات الصحية",
        },
        {
          id: 3,
          title: "المطابخ",
        },
        {
          id: 4,
          title: "الديكور والأثاث",
        },
        {
          id: 5,
          title: "مواد البناء",
        },
        {
          id: 6,
          title: "فروعنا",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  margin-right: 80px;
}
.nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav li {
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
}
</style>
