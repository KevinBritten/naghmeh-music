<template>
  <div
    class="site-footer"
    :class="{ '--menu-open': menuIsOpen, 'site-footer--hide': hideFooter }"
  >
    <div class="site-footer__social-icons">
      <a
        target="_blank"
        href="https://music.apple.com/ca/artist/naghmeh-and-the-southern-shores/1464957868"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--apple-music.svg"
          alt="Listen on Apple Music"
      /></a>
      <a
        target="_blank"
        href="http://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--bandcamp.svg"
          alt="Listen on Bandcamp"
      /></a>
      <a target="_blank" href="http://www.facebook.com/naghmehasong"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--facebook.svg"
          alt="Visit Facebook page"
      /></a>
      <a target="_blank" href="http://instagram.com/naghmehasong"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--instagram.svg"
          alt="Visit Instagram page"
      /></a>
      <a
        target="_blank"
        href="https://open.spotify.com/artist/0vBnUPIvZVYs1EIW5DyfCb?si=UXtdQ11eRxaeHPRQL0G4bQ"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--spotify--dark.svg"
          alt="Listen on Spotify"
      /></a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCjeHotf4y_BFuspVrXFy3OQ"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--youtube.svg"
          alt="Visit Youtube page"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpen", "hideFooter"]
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

.site-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: var(--c-footer-bg);
  z-index: 50;
  transition: transform 0.3s ease-out;

  &--hide {
    transform: translateY(100%);
  }

  &__social-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;

    a {
      display: flex;
      width: 30px;
      max-width: 10%;
    }
    img {
      width: 100%;
    }
  }
}

.--menu-open {
  z-index: 85;
}

@include atDesktop {
  .site-footer {
    &__social-icons {
      justify-content: end;
      padding-right: 40px;
      a {
        margin: 0 20px;
      }
    }
  }
}
</style>
