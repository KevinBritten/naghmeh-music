<template>
  <div class="music-page">
    <media-item
      v-for="spotifyPlaylist in albums"
      :key="spotifyPlaylist.name"
      :mediaItem="spotifyPlaylist"
    />
    <p v-if="$route.params.lang === 'fr'">Naghmeh apparaît sur:</p>
    <p v-else>Naghmeh appears on:</p>
    <hr />
    <media-item
      v-for="spotifyPlaylist in features"
      :key="spotifyPlaylist.name"
      :mediaItem="spotifyPlaylist"
    />
  </div>
</template>

<script>
import MediaItem from "../components/MediaItem.vue";
import sanity from "../sanity";

const query = `*[_type == "spotifyPlaylists"]`;

export default {
  components: { MediaItem },
  data() {
    return {
      albums: [],
      features: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      payload.forEach((playlist) => {
        if (playlist.section == "feature") {
          this.features.push(playlist);
        } else {
          this.albums.push(playlist);
        }
      });
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

<style lang="scss" scoped>
@import ".././styles/mixins.scss";

p {
  margin-top: 20px;
}

@include atDesktop {
  hr {
    width: 800px;
    margin: auto;
  }
}
</style>
