<template>
  <div class="site-footer">
    <div class="site-footer__social-icons">
      <a
        target="_blank"
        href="https://music.apple.com/ca/artist/naghmeh-and-the-southern-shores/1464957868"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--apple-music.svg"
      /></a>
      <a
        target="_blank"
        href="http://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--bandcamp.svg"
      /></a>
      <a target="_blank" href="http://www.facebook.com/naghmehasong"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--facebook.svg"
      /></a>
      <a target="_blank" href="http://instagram.com/naghmehasong"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--instagram.svg"
      /></a>
      <a
        target="_blank"
        href="https://open.spotify.com/artist/0vBnUPIvZVYs1EIW5DyfCb?si=UXtdQ11eRxaeHPRQL0G4bQ"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--spotify.svg"
      /></a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCjeHotf4y_BFuspVrXFy3OQ"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--youtube.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px 0;
  background-color: var(--c-footer-bg);
  z-index: 101;

  &__social-icons {
    display: flex;
    justify-content: space-around;

    a {
      width: 10%;
      margin: auto 0;
    }
    img {
      width: 100%;
    }
  }
}
</style>
