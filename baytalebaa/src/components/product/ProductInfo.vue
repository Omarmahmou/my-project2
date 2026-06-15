<template>
  <div class="product-info">
    <div class="product-header">
      <h1>{{ product.name }}</h1>
    </div>

    <div class="product-meta">
      <div class="brand">{{ product.brand }}</div>

      <div class="sku-row">
        <div class="sku">رمز المنتج: {{ product.sku }}</div>

        <a class="specs-link">المواصفات</a>
      </div>
    </div>

    <div class="price-section">
      <div class="price">
        <span class="amount">{{ convertToArabic(product.price) }}</span>
        <span>ريال</span>
      </div>
      <span class="tax-note"> * شامل ضريبة القيمة المضافة </span>
    </div>

    <div class="coupon-section">
      <p class="discount">خصم إضافي</p>

      <div v-if="product.coupon" class="coupon">
        بروموكود:
        <strong>{{ product.coupon }}</strong>
      </div>
    </div>

    <div class="qty-cart-row">
      <div class="qty-wrapper">
        <button @click="decrease">-</button>
        <input type="text" :value="quantity" readonly />
        <button @click="increase">+</button>
      </div>
      <button class="add-cart" @click="addToCart">🛒 إضافة للسلة</button>
    </div>

    <div class="links">
      <a href="#"> ♡ أضف للمفضلة </a>

      <a href="#"> ↗ مشاركة المنتج </a>
    </div>
    <hr
      style="
        border: none;
        height: 1px;
        background-color: #e0e0e0;
        margin: 3px 0;
        opacity: 0.7;
      "
    />

    <div class="total">
      <span> المجموع : </span>
      <strong>{{ convertToArabic(total) }} </strong>
      <span class="currency">ريال</span>
    </div>

    <a href="https://wa.me/+966508921667" class="bulk-price" target="_blank">
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="special_prices_icon"
      >
        <path
          d="M10.4985 18.3116C10.011 18.3136 9.53608 18.4662 9.13864 18.7485C8.7412 19.0308 8.44068 19.4289 8.27819 19.8885H7.34465C6.71731 19.8885 6.11567 19.6393 5.67207 19.1957C5.22848 18.7521 4.97927 18.1505 4.97927 17.5232V15.9462C4.97927 15.7371 4.8962 15.5366 4.74833 15.3887C4.60047 15.2408 4.39992 15.1578 4.19081 15.1578C3.98169 15.1578 3.78114 15.2408 3.63328 15.3887C3.48541 15.5366 3.40234 15.7371 3.40234 15.9462V17.5232C3.4036 18.5683 3.81935 19.5704 4.5584 20.3094C5.29746 21.0485 6.29947 21.4642 7.34465 21.4655H8.27819C8.42344 21.8732 8.67799 22.2332 9.014 22.5061C9.35002 22.779 9.75458 22.9543 10.1835 23.0128C10.6124 23.0713 11.0491 23.0108 11.4459 22.8379C11.8428 22.665 12.1845 22.3864 12.4336 22.0324C12.6828 21.6785 12.8299 21.2628 12.8589 20.8309C12.8878 20.399 12.7975 19.9675 12.5977 19.5835C12.398 19.1994 12.0966 18.8777 11.7263 18.6534C11.3561 18.4291 10.9314 18.3108 10.4985 18.3116Z"
          fill="#02426A"
        />
        <path
          d="M17.9904 8.85013H17.5962V8.06167C17.5962 6.17965 16.8485 4.37472 15.5177 3.04393C14.187 1.71314 12.382 0.965515 10.5 0.965515C8.61798 0.965515 6.81305 1.71314 5.48226 3.04393C4.15147 4.37472 3.40385 6.17965 3.40385 8.06167V8.85013H3.00962C2.27772 8.85013 1.5758 9.14087 1.05827 9.6584C0.540745 10.1759 0.25 10.8778 0.25 11.6097V13.9751C0.25 14.707 0.540745 15.4089 1.05827 15.9265C1.5758 16.444 2.27772 16.7347 3.00962 16.7347H4.98077C5.399 16.7347 5.80009 16.5686 6.09582 16.2729C6.39155 15.9771 6.55769 15.576 6.55769 15.1578V10.4271C6.55769 10.0088 6.39155 9.60773 6.09582 9.312C5.80009 9.01627 5.399 8.85013 4.98077 8.85013V8.06167C4.98077 6.59788 5.56226 5.19404 6.59731 4.15898C7.63237 3.12393 9.03621 2.54244 10.5 2.54244C11.9638 2.54244 13.3676 3.12393 14.4027 4.15898C15.4377 5.19404 16.0192 6.59788 16.0192 8.06167V8.85013C15.601 8.85013 15.1999 9.01627 14.9042 9.312C14.6084 9.60773 14.4423 10.0088 14.4423 10.4271V15.1578C14.4423 15.576 14.6084 15.9771 14.9042 16.2729C15.1999 16.5686 15.601 16.7347 16.0192 16.7347H17.9904C18.7223 16.7347 19.4242 16.444 19.9417 15.9265C20.4593 15.4089 20.75 14.707 20.75 13.9751V11.6097C20.75 10.8778 20.4593 10.1759 19.9417 9.6584C19.4242 9.14087 18.7223 8.85013 17.9904 8.85013Z"
          fill="#02426A"
        />
      </svg>
      <span class="bulk-price__text">أسعار خاصة للكميات</span>
    </a>

    <div class="shipping">
      <div class="shipping-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path d="M3 7h11v8H3z" />
          <path d="M14 10h4l3 3v2h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      </div>

      <p class="shipping-text">
        يستغرق الشحن والتوصيل من 1 إلى 3 أيام عمل، وذلك حسب توفر المنتجات ومنطقة
        التوصيل.
      </p>

      <a href="#" class="shipping-link"> تفاصيل التوصيل </a>
    </div>

    <a
      href="https://wa.me/+966508921667?text=https%3A%2F%2Fbaytalebaa.com%2Far%2Fsaudi-porcelain-60-x-120-cm-grey-matt-concrete1.html"
      class="whatsapp"
      target="_blank"
    >
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="Speak_with_product_expert_icon"
      >
        <path
          d="M12.3327 10.6667C12.166 10.5834 11.0827 10.0834 10.916 10C10.7493 9.91671 10.5827 9.91671 10.416 10.0834C10.2493 10.25 9.91602 10.75 9.74935 10.9167C9.66602 11.0834 9.49935 11.0834 9.33268 11C8.74935 10.75 8.16602 10.4167 7.66602 10C7.24935 9.58337 6.83268 9.08337 6.49935 8.58337C6.41602 8.41671 6.49935 8.25004 6.58268 8.16671C6.66602 8.08337 6.74935 7.91671 6.91602 7.83337C6.99935 7.75004 7.08268 7.58337 7.08268 7.50004C7.16602 7.41671 7.16602 7.25004 7.08268 7.16671C6.99935 7.08337 6.58268 6.08337 6.41602 5.66671C6.33268 5.08337 6.16602 5.08337 5.99935 5.08337H5.58268C5.41602 5.08337 5.16602 5.25004 5.08268 5.33337C4.58268 5.83337 4.33268 6.41671 4.33268 7.08337C4.41602 7.83337 4.66602 8.58337 5.16602 9.25004C6.08268 10.5834 7.24935 11.6667 8.66602 12.3334C9.08268 12.5 9.41602 12.6667 9.83268 12.75C10.2493 12.9167 10.666 12.9167 11.166 12.8334C11.7493 12.75 12.2493 12.3334 12.5827 11.8334C12.7493 11.5 12.7493 11.1667 12.666 10.8334L12.3327 10.6667ZM14.416 3.08337C11.166 -0.166626 5.91602 -0.166626 2.66602 3.08337C-0.000651076 5.75004 -0.500651 9.83337 1.33268 13.0834L0.166016 17.3334L4.58268 16.1667C5.83268 16.8334 7.16602 17.1667 8.49935 17.1667C13.0827 17.1667 16.7493 13.5 16.7493 8.91671C16.8327 6.75004 15.916 4.66671 14.416 3.08337ZM12.166 14.75C11.0827 15.4167 9.83268 15.8334 8.49935 15.8334C7.24935 15.8334 6.08268 15.5 4.99935 14.9167L4.74935 14.75L2.16602 15.4167L2.83268 12.9167L2.66602 12.6667C0.666016 9.33337 1.66602 5.16671 4.91602 3.08337C8.16602 1.00004 12.3327 2.08337 14.3327 5.25004C16.3327 8.50004 15.416 12.75 12.166 14.75Z"
          fill="#ffffff"
        />
      </svg>
      <span>تواصل مع المبيعات</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      quantity: 1,
    };
  },

  computed: {
    total() {
      return (this.product.price * this.quantity).toFixed(2);
    },
  },

  methods: {
    increase() {
      this.quantity++;
    },

    decrease() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },

    addToCart() {
      this.$emit("add-to-cart", {
        product: this.product,
        quantity: this.quantity,
      });
    },

    convertToArabic(num) {
      if (num === null || num === undefined) return "";

      const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

      return num.toString().replace(/[0-9]/g, (w) => {
        return arabicNumbers[englishNumbers.indexOf(w)];
      });
    },
  },
};
</script>

<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  direction: rtl;
}

.product-header h1 {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 1.5;
  color: #000;
}

.product-meta {
  display: flex;
  flex-direction: column;
}

.sku-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand,
.sku,
.review-link {
  font-size: 14px;
  color: #777;
}

.specs-link {
  color: #02426a !important;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
}

.price-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
}
.amount {
  font-family: Arial, Tahoma, sans-serif !important;
  font-size: 37px;
  font-weight: 500;
  color: #111;
}

.tax-note {
  font-size: 12px;
  color: #b1b0ac;
}

.coupon-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.discount {
  background: #ffa500;
  color: #ffffff;
  border: none;
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.coupon {
  background: #ffa500;
  color: black;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 13px;
  font-size: 14px;
  font-weight: 900;
}

.qty-cart-row {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 10px;
}

.qty-wrapper {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 120px;
  height: 35px;
  flex-shrink: 0;
  background: white;
}

.qty-wrapper button {
  padding-top: 0 !important;
  line-height: 1 !important;
  width: 35px;
  color: #a5a5a5;
  font-weight: 200;
  font-size: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
}

.qty-wrapper input {
  flex: 1;
  min-width: 0;
  text-align: center;
  border: none;
  font-size: 14px;
}
.add-cart {
  flex: 1;
  height: 35px;
  background: #02426a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
}

.links {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.links a {
  color: #666;
  text-decoration: none;
  font-size: 13px;
}

.total {
  font-size: 20px;
  color: #111;
  margin-top: 10px;
}

.total span {
  font-weight: 600;
  font-family: Arial, Tahoma, sans-serif !important;
}

.total strong {
  font-size: 24px;
  font-family: Arial, Tahoma, sans-serif !important;
}
.total .currency {
  font-weight: 300;
  font-family: "cairo";
}

.bulk-price {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #daecf8;
  padding: 14px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}

.bulk-price__text {
  color: #02426a;
  font-size: 14px;
  font-weight: 500;
}

.special_prices_icon {
  flex-shrink: 0;
}

.shipping {
  display: flex;
  align-items: center;
  direction: rtl;
  background: #f1f2f3;
  width: 100%;
  min-height: 85px;
  margin: 10px 0;
  padding: 18px 24px;
  box-sizing: border-box;
  color: #777;
  border-radius: 8px;
}

.shipping-icon {
  flex-shrink: 0;
  color: #8d8d8d;
  margin-left: 20px;
}

.shipping-icon svg {
  width: 34px;
  height: 34px;
}

.shipping-text {
  flex: 1;
  margin: 0;
  min-width: 0;
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.6;
  text-align: right;
}

.shipping-link {
  flex-shrink: 0;
  margin-right: 24px;

  color: #666;
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40%;
  height: 40px;
  border: none;
  border-radius: 4px;
  background: #28a745;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
}

.Speak_with_product_expert_icon {
  flex-shrink: 0;
}
</style>
