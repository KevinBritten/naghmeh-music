<template>
  <div class="merch-page">
    <merch-item
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
</template>

<script>
import MerchItem from "../components/MerchItem.vue";
import sanity from "../sanity";

const query = `*[_type == "products"]|order(orderRank)`;

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

<style lang="scss" scoped>
@import ".././styles/mixins.scss";

@include atTabletPortrait {
  .merch-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
