<template>
  <div>
    <div
      class="album-container"
      v-for="album in photoAlbums"
      :key="album.title"
    >
      <h2>{{ album.title }}</h2>
      <!-- <div class="album-inner-container">
        <div
          class="photo-container"
          v-for="photo in album.images"
          :key="photo.name"
        >
          <photo-item :image="photo.image"></photo-item>
        </div>
      </div> -->

      <div
        class="photo-container"
        :class="{ 'photo-container--fullscreen': fullscreen }"
      >
        <!-- <img
          v-for="photo in album.images"
          :key="photo.name"
          :alt="photo.name"
          :data-srcset="`${imageUrlFor(photo.image).width(300)} 300w,
                    ${imageUrlFor(photo.image).width(600)} 600w,
                    ${imageUrlFor(photo.image).width(800)} 800w,          
                    ${imageUrlFor(photo.image).width(1200)} 1200w,          
                    ${imageUrlFor(photo.image).width(1600)} 1600w,          
                    ${imageUrlFor(photo.image).width(2000)} 2000w,          
           `"
          sizes="(min-width: 767px) 50vw,
           (min-width: 991px) 33vw,
           100vw,"
          v-lazy="`${imageUrlFor(photo.image)}`"
        /> -->
        <img
          v-for="photo in album.images"
          :key="photo.name"
          :alt="photo.name"
          :srcset="`${imageUrlFor(photo.image).width(300)} 300w,
                    ${imageUrlFor(photo.image).width(600)} 600w,
                    ${imageUrlFor(photo.image).width(800)} 800w,          
                    ${imageUrlFor(photo.image).width(1200)} 1200w,          
                    ${imageUrlFor(photo.image).width(1600)} 1600w,          
                    ${imageUrlFor(photo.image).width(2000)} 2000w,          
           `"
          sizes="(min-width: 991px) 28vw, (min-width: 767px) 50vw, 100vw,"
          :src="`${imageUrlFor(photo.image)}`"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "photoAlbums"]`;

export default {
  data() {
    return {
      fullscreen: false,
      photoAlbums: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.photoAlbums = payload;
    });
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (photoAlbums) => {
          return photoAlbums;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

.fullscreen-icon-container {
  position: absolute;
  right: 2px;
  bottom: 56px;
  font-size: 40px;
  width: 40px;
  color: white;
  z-index: 75;
  transition: transform 300ms;
  transform: scale(1);

  &:hover {
    transform: scale(1.5);
  }
  &--fullscreen {
    position: fixed;
    right: 10px;
    bottom: 10px;
    transform: scale(1.5);
  }
}
.fullscreen-icon {
  width: 100%;
  height: 100%;
}
.album-container {
  padding: 10px 0;
  margin-bottom: 20px;
}
.album-inner-container {
  display: flex;
  flex-wrap: wrap;
}
.photo-container {
  margin: 15px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &--fullscreen {
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 70;
    background-color: var(--c-page-background);
    img {
      width: 100%;
    }
  }
}
img {
  max-width: 100%;
  margin: 10px 0;
  object-fit: contain;
}

@include atTabletPortrait {
  img {
    margin: 10px 10px;
    width: 42%;
  }
}
@include atDesktop {
  img {
    margin: 10px 20px;
    width: auto;
    height: 300px;
  }
}
</style>
