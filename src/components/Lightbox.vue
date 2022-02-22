<template>
  <div class="lightbox" @click.self="$emit('closeLightbox')">
    <button class="lightbox__close-button" @click="$emit('closeLightbox')">
      X
    </button>
    <div
      class="lightbox__inner-container"
      @click.self="$emit('closeLightbox')"
      v-touch:swipe="swipeHandler"
    >
      <button
        class="lightbox__nav lightbox__nav--prev"
        @click="changeSlide(-1)"
      >
        &lsaquo;
      </button>
      <button class="lightbox__nav lightbox__nav--next" @click="changeSlide(1)">
        &rsaquo;
      </button>

      <img
        :alt="currentImage.imageName"
        :srcset="`${imageUrlFor(currentImage.image).width(300)} 300w,
                    ${imageUrlFor(currentImage.image).width(600)} 600w,
                    ${imageUrlFor(currentImage.image).width(
                      800
                    )} 800w,          
                    ${imageUrlFor(currentImage.image).width(
                      1200
                    )} 1200w,          
                    ${imageUrlFor(currentImage.image).width(
                      1600
                    )} 1600w,          
                    ${imageUrlFor(currentImage.image).width(
                      2000
                    )} 2000w,          
           `"
        sizes="100vh,"
        :src="`${imageUrlFor(currentImage.image)}`"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  props: ["album", "startingIndex"],
  data() {
    return { imageIndex: this.startingIndex };
  },
  computed: {
    currentImage() {
      return this.album[this.imageIndex];
    },
  },
  created() {
    window.addEventListener("keydown", (e) => this.keyHandler(e.keyCode));
  },
  destroyed() {
    window.removeEventListener("keydown", (e) => this.keyHandler(e.keyCode));
  },
  methods: {
    changeSlide(direction) {
      this.imageIndex =
        (this.imageIndex + direction + this.album.length) % this.album.length;
    },
    swipeHandler(direction) {
      if (direction === "left") {
        this.changeSlide(-1);
      } else if (direction === "right") {
        this.changeSlide(1);
      }
    },
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    keyHandler(keyCode) {
      if (keyCode === 27) {
        this.$emit("closeLightbox");
      } else if (keyCode === 37) {
        this.changeSlide(-1);
      } else if (keyCode === 39) {
        this.changeSlide(1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import ".././styles/mixins.scss";

.lightbox {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  z-index: 500;
  &__close-button {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 0;
    color: white;
    background: none;
    border: none;
    font-size: 30px;
    font-family: sans-serif;
  }
  &__inner-container {
    position: relative;
    display: flex;
    width: 100%;
  }

  & img {
    max-height: 80vh;
    margin: auto;
  }
  &__nav {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30px;
    margin: 0;
    background: transparent;
    border: none;
    color: white;

    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
    &:active {
      background: black;
    }
    &--next {
      right: 0;
    }
  }
}

@include atDesktop {
  .lightbox {
    &__nav {
      width: 50px;
      font-size: 80px;
    }
  }
}
</style>