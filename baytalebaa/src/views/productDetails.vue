<template>
  <main class="product-page">
    <section>
      <ProductHero
        :product="product"
        @add-to-cart="$emit('add-to-cart', $event)"
      />
    </section>

    <section class="accordion-section">
      <ProductAccordion :items="product.accordion" />
    </section>
  </main>
</template>

<script>
import ProductHero from "@/components/sections/ProductHero.vue";
import ProductAccordion from "@/components/sections/ProductAccordion.vue";

export default {
  components: {
    ProductHero,
    ProductAccordion,
  },

  data() {
    return {
      product: {
        name: "بورسلان فوجيان سعودي مط | 60 × 120 سم | رمادي أسمنتي",
        brand: "Fujian",
        sku: "C362.224",
        price: 27,
        coupon: "Welcome10",

        images: [
          require("@/assets/images/hero-product1.jpg"),
          require("@/assets/images/hero-product2.jpg"),
          require("@/assets/images/hero-product3.jpg"),
        ],

        accordion: [
          {
            title: "وصف المنتج",
            contentType: "specs",
            content: [
              { label: "بلد المنشأ", value: "المملكة العربية السعودية" },
              { label: "اللون", value: "رمادي مط" },
              { label: "التصميم", value: "أسمنتي" },
              { label: "مقاس المنتج", value: "60 × 120 سم" },
            ],
          },
          {
            title: "المواصفات",
            contentType: "specs",
            content: [
              { label: "بلد المنشأ", value: "المملكة العربية السعودية" },
              { label: "اللون", value: "رمادي مط" },
              { label: "التصميم", value: "أسمنتي" },
              { label: "مقاس المنتج", value: "60 × 120 سم" },
            ],
          },
          {
            title: "الشحن والإرجاع",
            contentType: "shipping",
            content: {
              shippingTitle: "سياسة التوصيل",
              shippingText:
                "يجب على العميل عند استلام المنتجات فحصها والتأكد من المقاس، اللون، الكمية، نوعية المنتجات، وسلامتها من أي تلف أو كسر، وذلك قبل التوقيع على بطاقة التسليم المرفقة مع مندوب التوصيل. ولن تكون الشركة مسؤولة بعد توقيع العميل على بطاقة التسليم دون إبداء أي ملاحظات. تبلغ مهلة الاسترجاع والاستبدال 30 يومًا في حال الشراء من الموقع الإلكتروني للشركة، على أن يبدأ احتساب المدة من تاريخ إصدار الفاتورة في جميع الأحوال.لن يتم قبول أي طلب استرجاع أو استبدال دون تقديم أصل فاتورة الشراء. يشترط لقبول طلب الاسترجاع أو الاستبدال أن تكون المنتجات بحالتها الأصلية عند الشراء، غير مستخدمة، وخالية من أي كسر أو تلف، وأن تكون داخل التغليف أو الكرتون الأصلي متضمنة جميع المحتويات من إكسسوارات وغيرها، ومرفقًا معها كافة العروض والهدايا التي حصل عليها المشتري عند الشراء.تحتفظ الشركة بالحق الكامل في قبول أو رفض طلبات الاسترجاع أو الاستبدال وفقًا لسياساتها.",
              returnTitle: "سياسة الاستبدال والاسترجاع",
              returnText:
                "يجب على العميل عند استلام المنتجات فحصها والتأكد من المقاس، اللون، الكمية، نوعية المنتجات، وسلامتها من أي تلف أو كسر، وذلك قبل التوقيع على بطاقة التسليم المرفقة مع مندوب التوصيل. ولن تكون الشركة مسؤولة بعد توقيع العميل على بطاقة التسليم دون إبداء أي ملاحظات.تبلغ مهلة الاسترجاع والاستبدال 30 يومًا في حال الشراء من الموقع الإلكتروني للشركة، على أن يبدأ احتساب المدة من تاريخ إصدار الفاتورة في جميع الأحوال.لن يتم قبول أي طلب استرجاع أو استبدال دون تقديم أصل فاتورة الشراء.",
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.accordion-section {
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
</style>
