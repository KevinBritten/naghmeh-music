<template>
  <div id="app">
    <div class="bg-image-container">
      <img src="./assets/bg-photo-main.jpg" />
    </div>
    <site-header
      class="site-header"
      :menu-is-open="menuIsOpen"
      v-show="menuIsOpen"
      @close-menu="menuIsOpen = false"
    ></site-header>
    <site-header-desktop></site-header-desktop>
    <div :class="{ '--menu-open': menuIsOpen }" class="header-logo-container">
      <header-logo @close-menu="menuIsOpen = false" />
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

    <view-display v-else @hideFooter="hideShowFooter"> </view-display>
    <site-footer
      :class="{ '--menu-open': menuIsOpen }"
      :hideFooter="hideFooter"
    />
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteHeaderDesktop from "./components/SiteHeaderDesktop.vue";
import ViewDisplay from "./components/ViewDisplay.vue";
import Home from "./views/Home.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "app",
  data() {
    return {
      menuIsOpen: false,
      showFooter: true,
      hideFooter: false,
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    },
  },
  methods: {
    hideShowFooter(hideFooter) {
      this.hideFooter = hideFooter;
    },
  },
  components: {
    SiteHeader,
    SiteHeaderDesktop,
    ViewDisplay,
    Hamburger,
    HeaderLogo,
    Home,
    SiteFooter,
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/mixins.scss";

#app {
  height: 100%;
  padding: 70px 0 0;
  overflow: hidden;
}

.bg-image-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  background-color: var(--c-dark-blue);
  & img {
    z-index: -10;
    width: 400px;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    margin-left: auto;
    display: block;
    object-position: bottom;
  }
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

.--menu-open {
  z-index: 85;
}
.header-logo-container {
  position: relative;
}

@include atDesktop {
  .bg-image-container {
    padding: 100px 200px 50px 0;
  }
}
</style>
