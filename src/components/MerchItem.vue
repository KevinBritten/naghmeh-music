<template>
  <div class="merch-item">
    <img
      class="merch-item__product-image"
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
    <h3>{{ product.name }}</h3>
    <p v-if="product.details">{{ product.details }}</p>

    <p class="merch-item__price">
      ${{ product.price }} on
      <a :href="product.url" target="_blank"
        ><img
          class="merch-item__bandcamp-logo"
          src="../assets/social-icons-edited/naghmeh-social-icon--bandcamp.svg"
      /></a>
    </p>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
export default {
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
  props: ["product"],
};
</script>

<style lang="scss" scoped>
@import ".././styles/mixins.scss";

h3 {
  margin-top: 10px;
}
.merch-item {
  border: var(--c-footer-bg) 2px solid;
  border-radius: 5px;
  padding: 20px;

  margin: 0 25px 50px;
  &__product-image {
    width: 100%;
    object-fit: contain;
    max-height: 350px;
  }
  &__price {
    margin-top: 10px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__bandcamp-logo {
    height: 40px;
    padding: 2px 6px 0;
    border: 1px solid white;
    border-radius: 5px;

    display: block;
    background-color: white;
    margin-left: 10px;
  }
}
@include atTabletPortrait {
  .merch-item {
    padding: 25px;
    width: 40%;
    margin: 0 10px 40px;
    &__product-image {
      width: 100%;
      object-fit: contain;
      max-height: 250px;
    }
  }
}

@include atDesktop {
  .merch-item {
    width: 25%;
  }
}
</style>
