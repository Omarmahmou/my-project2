<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="$emit('toggle')">
      <span class="accordion-title">
        {{ item.title }}
      </span>

      <i
        class="fas fa-chevron-down accordion-icon"
        :class="{ open: isOpen }"
      ></i>
    </button>

    <transition
      name="accordion"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="isOpen" class="accordion-content">
        <div v-if="item.contentType === 'specs'" class="specs-wrapper">
          <div
            v-for="(row, index) in item.content"
            :key="index"
            class="spec-row"
          >
            <div class="spec-label">{{ row.label }}</div>
            <div class="spec-value">{{ row.value }}</div>
          </div>
        </div>

        <div v-if="item.contentType === 'shipping'" class="shipping-wrapper">
          <h3>{{ item.content.shippingTitle }}</h3>
          <p>{{ item.content.shippingText }}</p>

          <h3>{{ item.content.returnTitle }}</h3>
          <p>{{ item.content.returnText }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    isOpen: Boolean,
  },

  methods: {
    enter(el) {
      el.style.height = "0";
      el.style.overflow = "hidden";
      el.style.transition = "height 0.35s ease";

      requestAnimationFrame(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },

    afterEnter(el) {
      el.style.height = "auto";
      el.style.overflow = "visible";
    },

    leave(el) {
      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
      el.style.transition = "height 0.35s ease";

      requestAnimationFrame(() => {
        el.style.height = "0";
      });
    },
  },
};
</script>

<style scoped>
.accordion-item {
  border-bottom: 1px solid #dcdcdc;
}

.accordion-header {
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.accordion-title {
  font-size: 22px;
  font-weight: 500;
  text-align: right;
}

.accordion-icon {
  font-size: 18px;
  transition: transform 0.3s ease;
}

.accordion-icon.open {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 20px 40px;
}

.specs-wrapper {
  max-width: 700px;
  margin-left: auto;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.spec-label {
  font-weight: 500;
}

.spec-value {
  color: #555;
}

.shipping-wrapper {
  max-width: 1200px;
  line-height: 2;
}

.shipping-wrapper h3 {
  margin-bottom: 12px;
  font-size: 18px;
}

.shipping-wrapper p {
  margin-bottom: 25px;
  color: #555;
}
</style>
