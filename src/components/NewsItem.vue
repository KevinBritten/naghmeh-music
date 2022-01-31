<template>
  <a target="_blank" :href="newsItem.link" class="news-item">
    <h2>{{ newsItem.headline }}</h2>
    <h4>-{{ newsItem.publication }}</h4>
    <img :src="`${imageUrlFor(newsItem.logo)}`" />
    <p>{{ newsItem.publishDate }}</p>
  </a>
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
  margin: 10px auto;
  padding: 10px;
  display: block;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: black;
    color: white;
  }
  & img {
    max-width: 100px;
    max-height: 100px;
  }
}
</style>