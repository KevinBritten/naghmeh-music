<template>
  <div class="home">
    <site-title />
    <p>new single ‘A Great Song’<br/> available now on Spotify</br> and Youtube</p>
  </div>
</template>

<script>
import SiteTitle from "../components/SiteTitle.vue";
export default {
  components: { SiteTitle },
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

.home {
  position: relative;
  padding-top: 20px;
  color: white;
}
p {
  padding-left: 10px;
}

@include atTabletPortrait {
  p {
    padding-left: 60px;
  }
}
</style>