import Vue from "vue";
import VueRouter from "vue-router";

import ProductDetails from "@/views/productDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/product/test-product",
  },

  {
    path: "/product/:id",
    name: "product-details",
    component: ProductDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
