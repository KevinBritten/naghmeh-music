<template>
  <div>
    <music-item
      v-for="spotifyPlaylist in spotifyPlaylists"
      :key="spotifyPlaylist.name"
      :spotifyPlaylist="spotifyPlaylist"
    />
  </div>
</template>

<script>
import MusicItem from "../components/MusicItem.vue";
import sanity from "../sanity";

const query = `*[_type == "spotifyPlaylists"]`;

export default {
  components: { MusicItem },
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
