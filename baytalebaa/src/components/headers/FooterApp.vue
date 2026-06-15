<template>
  <footer>
    <div class="container">
      <div class="footer-top">
        <FooterContact />
        <FooterSection title="عن بيت الإباء" :items="aboutItems" />

        <FooterSection title="الدعم" :items="supportItems" />

        <FooterSection title="روابط سريعة" :items="linksItems" />
      </div>
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import FooterBottom from "./FooterBottom.vue";
import FooterContact from "./FooterContact.vue";
import FooterSection from "./FooterSection.vue";

export default {
  data() {
    return {
      aboutItems: [
        { label: "من نحن", link: "#" },
        { label: "المعارض", link: "#" },
        { label: "المشاريع", link: "#" },
        { label: "سياسة الخصوصية", link: "#" },
      ],

      supportItems: [{ label: "اتصل بنا", link: "#" }],

      linksItems: [
        { label: "أسئلة متكررة", link: "#" },
        { label: "سياسة الضمان", link: "#" },
        { label: "الإستبدال والإسترجاع", link: "#" },
        { label: "الوظائف", link: "#" },
      ],
    };
  },
  components: {
    FooterContact,
    FooterSection,
    FooterBottom,
  },
};
</script>

<style scoped>
footer {
  background-color: #02426a;
  font-family: "Cairo", sans-serif;
  font-weight: 500;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 0 0;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
}
</style>
