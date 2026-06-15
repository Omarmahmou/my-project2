<template>
  <div class="product-accordion">
    <AccordionItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
      :is-open="activeIndex === index"
      @toggle="toggle(index)"
    />
  </div>
</template>

<script>
import AccordionItem from "../product/AccordionItem.vue";

export default {
  components: {
    AccordionItem,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      activeIndex: 0,
    };
  },

  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.product-accordion {
  width: 100%;
}
</style>
