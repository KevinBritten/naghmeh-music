<template>
  <div>
    <h2>{{ spotifyPlaylist.name }}</h2>
    <iframe
      :src="spotifyPlaylist.url"
      allowfullscreen
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
export default { props: ["spotifyPlaylist"] };
</script>

<style scoped lang="scss">
h2 {
  text-decoration: underline;
  margin-bottom: 5px;
}

iframe {
  height: 360px;
  width: 100%;
  border: 0;
}
</style>