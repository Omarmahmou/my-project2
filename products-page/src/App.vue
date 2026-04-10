<template>
  <div id="app">
    <SearchProducts v-model="search" />
    <p v-if="loading">loading ......</p>
    <p v-if="error">{{ error }}</p>
    <ProductsApp :products="filteredProducts" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import ProductsApp from "./components/productsApp.vue";
import axios from "axios";

import SearchProducts from "./components/searchProducts.vue";

export default {
  name: "App",
  components: {
    SearchProducts,
    ProductsApp,
  },
  data() {
    return {
      search: "",
      products: [],
      cart: [],
      loading: false,
      error: null,
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;

      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        this.products = res.data;
      } catch (error) {
        this.error = "Failed to load products";
      } finally {
        this.loading = false;
      }
    },
    addToCart(product) {
      this.cart.push(product);
      console.log(this.cart);
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
