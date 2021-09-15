<template>
  <div id="app">
    <site-header
      class="site-header"
      @toggle-menu="menuIsOpen = !menuIsOpen"
      :menu-is-open="menuIsOpen"
    ></site-header>
    <view-display> </view-display>
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import MobileMenu from "./components/MobileMenu.vue";
import ViewDisplay from "./components/ViewDisplay.vue";
export default {
  name: "app",
  data() {
    return {
      menuIsOpened: false,
    };
  },
  components: {
    SiteHeader,
    MobileMenu,
    ViewDisplay,
  },
};
</script>

<style>
:root {
  --dark-blue-bg: #010122;
  --footer-bg: #4c4d64;
}

.center-content {
  flex: 1 1 0;
  position: relative;
}
.main-flex-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>
