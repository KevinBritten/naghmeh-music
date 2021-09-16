<template>
  <div class="photo-page">
    <div
      class="photo-page__fullscreen-icon-container"
      :class="{
        'photo-page__fullscreen-icon-container--fullscreen': fullscreen,
      }"
      @click="fullscreenToggle()"
    >
      <svg
        class="photo-page__fullscreen-icon"
        id="i-fullscreen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      >
        <path
          d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28"
        />
      </svg>
    </div>
    <div
      class="photo-page__photo-container"
      ref="photoContainer"
      :class="{ 'photo-page__photo-container--fullscreen': fullscreen }"
    >
      <!-- <img
        class="photo-page__image"
        :class="{
          'photo-page__image--fullscreen': fullscreen,
        }"
        v-for="(photo, i) in photoList"
        v-lazy="`${sourceFolder}${photo}`"
        :key="photo"
        :alt="i"
      /> -->
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "photos"]`;

export default {
  data() {
    return {
      sourceFolder: "dist/src/assets/images/photos/",
      fullscreen: false,
      photos: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.photos = payload;
    });
    // await this.setPhotos();
  },
  methods: {
    fullscreenToggle() {
      const fullscreen = this.fullscreen;
      const photoContainer = this.$refs.photoContainer;
      const currentContainer = fullscreen
        ? photoContainer
        : photoContainer.parentNode;
      const targetContainer = fullscreen
        ? photoContainer.parentNode
        : photoContainer;
      const scrollSectionStart = currentContainer.getBoundingClientRect().y;
      // const firstVisibleImage = Array.from(photoContainer.children).find(
      //   child => {
      //     const childBoundingRect = child.getBoundingClientRect();
      //     return (
      //       childBoundingRect.y + childBoundingRect.height > scrollSectionStart
      //     );
      //   }
      // );
      const firstVisibleImage = Array.from(photoContainer.children).find(
        (child) => {
          return child.getBoundingClientRect().y > scrollSectionStart;
        }
      );
      console.log(firstVisibleImage);
      this.fullscreen = !fullscreen;
      const waitForClass = setInterval(() => {
        const classChanged = this.fullscreen
          ? photoContainer.classList.contains(
              "photo-page__photo-container--fullscreen"
            )
          : !photoContainer.classList.contains(
              "photo-page__photo-container--fullscreen"
            );

        if (classChanged) {
          targetContainer.scrollTop =
            firstVisibleImage.getBoundingClientRect().y - scrollSectionStart;
          clearInterval(waitForClass);
        }
      }, 50);
      setTimeout(() => {
        clearInterval(waitForClass);
      }, 300);
    },
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (photos) => {
          return photos;
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
.photo-page {
  height: 100%;
  &__fullscreen-icon-container {
    position: absolute;
    right: 2px;
    top: 56px;
    font-size: 40px;
    width: 40px;
    color: white;
    z-index: 200;
    transition: transform 300ms;
    transform: scale(1);

    /* &:hover {
      transform: scale(1.5);
    } */
    &--fullscreen {
      position: fixed;
      top: 15px;
      right: 15px;
      transform: scale(1.5);
    }
  }
  &__fullscreen-icon {
    width: 100%;
    height: 100%;
  }
  &__photo-container {
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: scroll;
    &--fullscreen {
      margin: 0;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      background-color: rgb(var(--main-bg-color));
    }
  }
  &__image {
    max-width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    min-height: 200px;
    &--fullscreen {
      width: 100%;
    }
  }
}
@media (min-width: 500px) {
  .photo-page {
    &__image {
      width: 49%;
      min-height: 100%;
      &--fullscreen {
        width: 100%;
        min-height: 0;
      }
    }
  }
}
</style>
