<template>
  <div>
    <h4>{{ show.name }}</h4>
    <p>{{ show.date }}</p>
    <img
      class="show-item__image"
      v-if="show.image"
      :alt="show.name"
      :data-srcset="`${imageUrlFor(show.image).width(300)} 300w,
                    ${imageUrlFor(show.image).width(600)} 600w,
                    ${imageUrlFor(show.image).width(800)} 800w,          
                    ${imageUrlFor(show.image).width(1200)} 1200w,          
                    ${imageUrlFor(show.image).width(1600)} 1600w,          
                    ${imageUrlFor(show.image).width(2000)} 2000w,          
           `"
      sizes="(min-width: 767px) 50vw,
           (min-width: 991px) 33vw,
           100vw,"
      v-lazy="`${imageUrlFor(show.image)}`"
    />
    <a target="_blank" :href="facebookUrl" v-if="show.facebookUrl"
      ><img
        src="../assets/social-icons-edited/naghmeh-social-icon--facebook.svg"
    /></a>
    <a target="_blank" :href="ticketUrl" v-if="show.ticketUrl"
      ><img
        src="../assets/social-icons-edited/naghmeh-social-icon--spotify--dark.svg"
    /></a>
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
  computed: {
    facebookUrl() {
      return this.show.facebookUrl.includes("http")
        ? this.show.facebookUrl
        : `https://` + this.show.facebookUrl;
    },
    ticketUrl() {
      return this.show.ticketUrl.includes("http")
        ? this.show.ticketUrl
        : `https://` + this.show.ticketUrl;
    },
  },
  props: ["show"],
};
</script>

<style scoped>
.show-item {
  &__image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
}
</style>