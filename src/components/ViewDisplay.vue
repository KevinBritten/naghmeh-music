<template>
  <div>
    <img src="../assets/11.+Naghmeh+Portrait+Illuminated.jpg" />
    <router-view />
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from "../components/SiteFooter.vue";

export default {
  components: { SiteFooter },
};
</script>

<style scoped>
img {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
}
</style>
