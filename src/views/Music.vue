<template>
  <div class="music-page">
    <scroll-area :title="'Music'">
      <div class="music-page__spotify-embed">
        <div class="music-page__single-embed-container">
          <h2>Mount Shasta</h2>
          <iframe
            src="https://open.spotify.com/embed/artist/0vBnUPIvZVYs1EIW5DyfCb"
            allowfullscreen
            allow="encrypted-media"
          ></iframe>
        </div>
        <div class="music-page__single-embed-container">
          <h2>La Frontera</h2>
          <iframe
            src="https://open.spotify.com/embed/track/72a5G5O8nntwovTGojP7Mo"
            width="300"
            height="380"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div></div
    ></scroll-area>
  </div>
</template>

<script>
export default {};
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
