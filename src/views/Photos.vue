<template>
  <div>
    <lightbox
      v-if="lightboxOpen"
      :album="photoAlbums[albumIndex].images"
      :startingIndex="imageIndex"
      @closeLightbox="lightboxOpen = false"
    ></lightbox>
    <photo-album
      v-for="(album, index) in photoAlbums"
      :key="album.title.en"
      :album="album"
      :albumIndex="index"
      @open-lightbox="openLightbox"
    />
  </div>
</template>

<script>
import Lightbox from "../components/Lightbox.vue";
import PhotoAlbum from "../components/PhotoAlbum.vue";
import sanity from "../sanity";

const query = `*[_type == "photoAlbums"]|order(orderRank)`;

export default {
  data() {
    return {
      photoAlbums: [],
      lightboxOpen: false,
      imageIndex: null,
      albumIndex: null,
    };
  },
  components: { Lightbox, PhotoAlbum },
  created() {
    this.fetchData().then((payload) => {
      this.photoAlbums = payload;
    });
  },
  methods: {
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
    openLightbox(imageIndex, albumIndex) {
      this.imageIndex = imageIndex;
      this.albumIndex = albumIndex;
      this.lightboxOpen = true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
