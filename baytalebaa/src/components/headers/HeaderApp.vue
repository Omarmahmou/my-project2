<template>
  <header class="header">
    <div class="container">
      <HeaderLogo />
      <HeaderNav />
      <HeaderIcons :cartCount="cartCount" />
    </div>
  </header>
</template>

<script>
import HeaderIcons from "./HeaderIcons.vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderLogo from "./HeaderLogo.vue";

export default {
  components: {
    HeaderIcons,
    HeaderNav,
    HeaderLogo,
  },
  props: {
    cartCount: Number,
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
}

.container {
  max-width: 1400px;
  margin: auto;
  height: 75px;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
