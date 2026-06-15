<template>
  <a href="/">
    <img :src="image1" alt="header image" />
  </a>
</template>

<script>
import headerImage from "/src/assets/images/header.png";
export default {
  data() {
    return {
      image1: headerImage,
    };
  },
};
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
}

a img {
  width: 120px;
  height: 40px;
}
</style>
