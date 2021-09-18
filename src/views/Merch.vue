<template>
  <div class="merch-page">
    <div
      class="merch-page__item-container"
      v-for="product in products"
      :key="product.name"
    >
      <h2>{{ product.name }}</h2>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "products"]`;

export default {
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
  text-align: center;
  margin-bottom: 5px;
  text-decoration: underline;
}

.merch-page {
  width: 100%;
  position: relative;
  overflow: hidden;
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
}

iframe {
  height: 360px;
  max-height: 90%;
  width: 100%;
  border: 0;
}
</style>
