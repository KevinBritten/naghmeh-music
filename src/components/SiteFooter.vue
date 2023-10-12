<template>
  <div
    class="site-footer"
    :class="{ '--menu-open': menuIsOpen, 'site-footer--hide': hideFooter }"
  >
    <div class="site-footer__social-icons">
      <a
        target="_blank"
        href="https://music.apple.com/us/album/lose-yourself-to-dance-single/1708005821"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--apple-music.svg"
          alt="Listen on Apple Music"
      /></a>
      <a
        target="_blank"
        href="https://open.spotify.com/track/3QxPg8dixfnq8ENBoQJ66b?si=5bbaf4b90c9e4fa7"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--spotify--dark.svg"
          alt="Listen on Spotify"
      /></a>
      <a target="_blank" href="https://deezer.page.link/jmakE1rLbB3NLDyX8"
        ><img
          src="../assets/social-icons-edited/naghmeh-social-icon--deezer.svg"
          alt="Listen on Deezer"
      /></a>
      <a target="_blank" href="https://naghmeh.bandcamp.com/"
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
  props: ["menuIsOpen", "hideFooter"],
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
