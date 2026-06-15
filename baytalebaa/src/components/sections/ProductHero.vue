<template>
  <div class="product-page">
    <div class="container">
      <div class="product-hero">
        <ProductGallery :images="product.images" />
        <ProductInfo
          :product="product"
          @add-to-cart="$emit('add-to-cart', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductGallery from "../product/ProductGallery.vue";
import ProductInfo from "../product/ProductInfo.vue";

export default {
  name: "ProductHero",
  components: { ProductGallery, ProductInfo },
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<style scoped>
.product-page {
  background: #f8f8f8;
  padding: 32px 0;
}

.product-hero {
  display: flex;
  gap: 48px;
  padding: 20px 0;
  align-items: flex-start;
}

.product-hero > :first-child {
  flex: 1.5;
}

.product-hero > :last-child {
  flex: 1;
}
</style>
