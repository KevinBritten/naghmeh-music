<template>
  <div id="app">
    <header-logo />
    <hamburger
      @toggle-menu="menuIsOpen = !menuIsOpen"
      :menu-is-open="menuIsOpen"
    />
    <site-header
      class="site-header"
      :menu-is-open="menuIsOpen"
      v-show="menuIsOpen"
      @close-menu="menuIsOpen = false"
    ></site-header>
    <view-display> </view-display>
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import SiteHeader from "./components/SiteHeader.vue";
import ViewDisplay from "./components/ViewDisplay.vue";

export default {
  name: "app",
  data() {
    return {
      menuIsOpen: false,
    };
  },
  components: {
    SiteHeader,
    ViewDisplay,
    Hamburger,
    HeaderLogo,
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
