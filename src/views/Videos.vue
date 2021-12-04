<template>
  <div>
    <video-item v-for="video in videos" :key="video.name" :videoItem="video" />
  </div>
</template>

<script>
import VideoItem from "../components/VideoItem.vue";
import sanity from "../sanity";

const query = `*[_type == "videos"]`;

export default {
  components: { VideoItem },
  data() {
    return {
      videos: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.videos = payload;
      this.videos.forEach((v) => {
        v.url = `https://www.youtube.com/embed/` + v.code;
      });
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (videos) => {
          return videos;
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
/* h2 {
  margin-bottom: 5px;
  text-decoration: underline;
}

.videos-page {
  text-align: center;

  width: 100%;
  position: relative;
  overflow: hidden;
  &__spotify-embed {
    display: block;
    margin: 5% 0;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  &__single-embed-container {
    min-height: 150px;
    position: relative;
  }
}

iframe {
  height: 360px;
  max-height: 90%;
  width: 100%;
  border: 0;
} */
</style>
