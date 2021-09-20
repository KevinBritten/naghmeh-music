<template>
  <div id="app">
    <img src="./assets/11.+Naghmeh+Portrait+Illuminated.jpg" />
    <site-header
      class="site-header"
      :menu-is-open="menuIsOpen"
      v-show="menuIsOpen"
      @close-menu="menuIsOpen = false"
    ></site-header>
    <div :class="{ '--menu-open': menuIsOpen }" class="header-logo-container">
      <header-logo @close-menu="menuIsOpen = false" />
    </div>
    <div class="site-title-container" :class="{ '--menu-open': menuIsOpen }">
      <site-title v-show="$route.path !== '/'" />
    </div>
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
    <home v-if="isHome"></home>

    <view-display v-else> </view-display>
    <site-footer />
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteTitle from "./components/SiteTitle.vue";
import ViewDisplay from "./components/ViewDisplay.vue";
import Home from "./views/Home.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "app",
  data() {
    return {
      menuIsOpen: false,
    };
  },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
  },
  components: {
    SiteHeader,
    ViewDisplay,
    Hamburger,
    HeaderLogo,
    SiteTitle,
    Home,
    SiteFooter,
  },
};
</script>

<style scoped>
#app {
  height: 100%;
  padding: 70px 0 60px;
  overflow: hidden;
}
img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: right;
  background-color: var(--c-dark-blue);
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
.site-title-container {
  position: fixed;
  top: 15px;
  left: 110px;
  transform: scale(0.3);
  transform-origin: top left;
  z-index: 50;
}
.--menu-open {
  z-index: 85;
}
.header-logo-container {
  position: relative;
}
</style>
