<template>
  <div class="card">
    <img :src="product.images[0]" style="width: 100px" />

    <div class="about">
      <h2>{{ product.title }}</h2>
      <p>{{ product.price }}</p>
    </div>
    <button @click="$emit('add-to-cart', product)">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>
