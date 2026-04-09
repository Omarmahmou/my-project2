export const myMixin = {
  data() {
    return {
      mixinText: "Hello from mixin!",
    };
  },
  created() {
    console.log("Mixin created");
  },
  methods: {
    showMixinMessage() {
      alert("Mixin says hi!");
    },
  },
};
