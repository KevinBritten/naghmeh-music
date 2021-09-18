<template>
  <div class="merch-page">
    <merch-item
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
    <!-- <div
      class="merch-page__item-container"
      v-for="product in products"
      :key="product.name"
    >
      <h2>{{ product.name }}</h2>
      <p>{{ product.details }}</p>
      <img
        class="merch-page__image"
        :alt="product.name"
        :data-srcset="`${imageUrlFor(product.image).width(300)}
      300w, ${imageUrlFor(product.image).width(600)} 600w,
      ${imageUrlFor(product.image).width(800)} 800w,
      ${imageUrlFor(product.image).width(1200)} 1200w,
      ${imageUrlFor(product.image).width(1600)} 1600w,
      ${imageUrlFor(product.image).width(2000)} 2000w, `"
        sizes="(min-width:
      767px) 50vw, (min-width: 991px) 33vw, 100vw,"
        v-lazy="`${imageUrlFor(product.image)}`"
      />
    </div> -->
  </div>
</template>

<script>
import MerchItem from "../components/MerchItem.vue";
import sanity from "../sanity";

const query = `*[_type == "products"]`;

export default {
  components: { MerchItem },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.products = payload;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (products) => {
          return products;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 5px;
  text-decoration: underline;
}

.merch-page {
  width: 100%;
  position: relative;
  overflow: hidden;
  text-align: center;

  &__spotify-item {
    display: block;
    margin: 5% 0;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  &__item-container {
    min-height: 150px;
    position: relative;
  }
  &__image {
    object-fit: cover;
  }
}

iframe {
  height: 360px;
  max-height: 90%;
  width: 100%;
  border: 0;
}
</style>
