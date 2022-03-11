<template>
  <div class="album-container">
    <h2>{{ album.title[$route.params.lang] }}</h2>

    <div class="photo-container">
      <img
        class="lazyload"
        v-for="(photo, imageIndex) in album.images"
        :key="photo.imageName.name + imageIndex"
        :alt="photo.imageName.name"
        :data-src="`${imageUrlFor(photo.image)}`"
        data-sizes="(min-width: 991px) 28vw, (min-width: 767px) 40vw, 100vw,"
        :data-srcset="`${imageUrlFor(photo.image).width(300)} 300w,
                    ${imageUrlFor(photo.image).width(600)} 600w,
                    ${imageUrlFor(photo.image).width(800)} 800w,          
                    ${imageUrlFor(photo.image).width(1200)} 1200w,          
                    ${imageUrlFor(photo.image).width(1600)} 1600w,          
                    ${imageUrlFor(photo.image).width(2000)} 2000w,          
           `"
        @click="$emit('open-lightbox', imageIndex, albumIndex)"
      />
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

export default {
  props: ["album", "albumIndex"],
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

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
}
img {
  max-width: 100%;
  margin: 10px 0;
  object-fit: contain;
  cursor: pointer;
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
