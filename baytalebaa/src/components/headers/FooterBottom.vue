<template>
  <div class="footer-bottom">
    <div class="container">
      <div class="copyright">© جميع الحقوق محفوظة لبيت الإباء 2023</div>
      <div class="payments">
        <img src="@/assets/images/Mada-footer.png" alt="Mada" />
        <img src="@/assets/images/mc-footer.png" alt="MasterCard" />
        <img src="@/assets/images/visa-footer.png" alt="Visa" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBottom",
};
</script>

<style scoped>
.footer-bottom {
  padding: 19.9px 0 97.5px;
  margin-top: 50px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.payments {
  display: flex;
  align-items: center;
  gap: 10px;
}

.payments img {
  height: 16px;
  object-fit: contain;
}

.copyright {
  font-size: 12px;
  font-weight: 500;
  transform: translateY(6px);
  color: #fff;
}
</style>
