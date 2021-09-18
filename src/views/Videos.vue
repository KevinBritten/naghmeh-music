<template>
  <div class="videos-page">
    <div class="videos-page__youtube-embed">
      <div
        class="videos-page__single-embed-container"
        v-for="video in videos"
        :key="video.name"
      >
        <h2>{{ video.name }}</h2>
        <p>{{ video.subtitle }}</p>
        <iframe
          width="560"
          height="315"
          :src="`https://www.youtube.com/embed/` + video.code"
          :title="`YouTube video player - ` + video.name"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "videos"]`;

export default {
  data() {
    return {
      videos: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.videos = payload;
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
h2 {
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
}
</style>
