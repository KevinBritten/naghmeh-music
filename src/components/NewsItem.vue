<template>
  <div class="news-item">
    <a target="_blank" :href="newsItem.link">
      <img :src="`${imageUrlFor(newsItem.logo)}`" />
      <div class="news-item__info-container">
        <h2>{{ newsItem.headline }}</h2>
        <span class="news-item__small-text">-{{ newsItem.publication }}</span
        ><br />
        <span class="news-item__small-text">{{ newsItem.publishDate }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  props: ["newsItem"],
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style lang='scss' scoped>
.news-item {
  &:hover,
  :active {
    background-color: var(--c-footer-bg);
    color: white;
  }
  & a {
    margin: 10px auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:visited {
      color: black;
    }
  }
  & img {
    max-width: 80px;
    max-height: 100px;
    object-fit: contain;
    margin-right: 20px;
  }
  &__info-container {
    width: 300px;
  }
  &__small-text {
    font-size: 0.8rem;
  }
}
</style>