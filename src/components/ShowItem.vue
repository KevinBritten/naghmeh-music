<template>
  <div class="show-item">
    <h4>{{ show.name }}</h4>
    <p>{{ parsedDate }}</p>
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
    /><br />
    <a target="_blank" :href="facebookUrl" v-if="show.facebookUrl"
      ><img
        class="show-item__icon"
        src="../assets/social-icons-edited/naghmeh-social-icon--facebook.svg"
    /></a>
    <img
      class="show-item__icon"
      v-else
      src="../assets/social-icons-edited/naghmeh-social-icon--facebook.svg"
      style="opacity: 0.4"
    />
    <a
      target="_blank"
      :href="ticketUrl"
      v-if="show.ticketUrl && $attrs.upcoming"
      ><img
        class="show-item__icon"
        src="../assets/icons/tickets-svgrepo-com.svg"
    /></a>
    <img
      class="show-item__icon"
      v-else
      src="../assets/icons/tickets-svgrepo-com.svg"
      style="opacity: 0.4"
    />
  </div>
</template>


<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
export default {
  data() {
    return {
      months: {
        french: [],
        english: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
    };
  },
  props: ["upcoming"],
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
  computed: {
    facebookUrl() {
      if (!this.show.facebookUrl) {
        return "";
      }
      return this.show.facebookUrl.includes("http")
        ? this.show.facebookUrl
        : `https://` + this.show.facebookUrl;
    },
    ticketUrl() {
      return this.show.ticketUrl.includes("http")
        ? this.show.ticketUrl
        : `https://` + this.show.ticketUrl;
    },
    parsedDate() {
      //TODO: allow for french
      const date = new Date(this.show.date);
      console.log(date.getMonth());
      return `${
        this.months.english[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
    },
  },
  props: ["show"],
};
</script>

<style scoped>
@import ".././styles/mixins.scss";

.show-item {
  margin: 50px auto;
  max-width: 800px;
  padding: 10px;
  border: var(--c-footer-bg) 2px solid;
  border-radius: 5px;
  &__image {
    max-height: 300px;
    max-width: 100%;
    margin-bottom: 20px;
  }
  &__icon {
    width: 40px;
  }
}
</style>