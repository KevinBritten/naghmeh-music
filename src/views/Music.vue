<template>
  <div class="music-page">
    <div class="music-page__spotify-embed">
      <div
        class="music-page__single-embed-container"
        v-for="spotifyPlaylist in spotifyPlaylists"
        :key="spotifyPlaylist.name"
      >
        <h2>{{ spotifyPlaylist.name }}</h2>
        <iframe
          :src="spotifyPlaylist"
          allowfullscreen
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "spotifyPlaylists"]`;

export default {
  data() {
    return {
      spotifyPlaylists: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.spotifyPlaylists = payload;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (spotifyPlaylists) => {
          return spotifyPlaylists;
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
  text-align: center;
  margin-bottom: 5px;
  text-decoration: underline;
}

.music-page {
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
