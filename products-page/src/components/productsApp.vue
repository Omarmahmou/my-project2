<template>
  <div class="products">
    <CardApp
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="$emit('add-to-cart', $event)"
    />
  </div>
</template>

<script>
import CardApp from "./CardApp.vue";

export default {
  components: {
    CardApp,
  },
  props: {
    products: Array,
  },
};
</script>
<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 40px;
  background-color: #1a1a1a;
}
</style>
