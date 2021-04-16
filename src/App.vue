<template>
  <div id="app">
    <div class="main-flex-wrapper">
      <site-header
        class="site-header"
        @toggle-menu="menuIsOpen = !menuIsOpen"
        :menu-is-open="menuIsOpen"
      ></site-header>
      <div class="center-content">
        <view-display> </view-display>
        <mobile-menu
          v-show="menuIsOpened"
          @toggle-menu="menuIsOpened = false"
        ></mobile-menu>
      </div>

      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import MobileMenu from "./components/MobileMenu.vue";
import ViewDisplay from "./components/ViewDisplay.vue";
export default {
  name: "app",
  data() {
    return {
      menuIsOpened: false
    };
  },
  components: {
    SiteFooter,
    SiteHeader,
    MobileMenu,
    ViewDisplay
  }
};
</script>

<style>
:root {
  --dark-blue-bg: #010122;
  --footer-bg: #4c4d64;
}
#app {
  height: 100%;
  background-image: url("./assets/11.+Naghmeh+Portrait+Illuminated.jpg");
  background-size: cover;
}
.center-content {
  flex: 1 1 0;
  position: relative;
}
.main-flex-wrapper {
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
}
</style>
