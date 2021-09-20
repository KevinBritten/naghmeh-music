<template>
  <div>
    <media-item
      v-for="spotifyPlaylist in spotifyPlaylists"
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

<style>
</style>
