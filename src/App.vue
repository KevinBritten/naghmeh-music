<template>
  <div id="app">
    <div class="bg-image-container">
      <img src="./assets/bg-photo-desktop.jpg" />
    </div>
    <site-menu
      :menu-is-open="menuIsOpen"
      @close-menu="menuIsOpen = false"
    ></site-menu>
    <div :class="{ '--menu-open': menuIsOpen }" class="header-logo-container">
      <header-logo @close-menu="menuIsOpen = false" />
    </div>
    <hamburger
      @toggle-menu="menuIsOpen = !menuIsOpen"
      :menu-is-open="menuIsOpen"
    />
    <!-- <transition v-if="isHome" name="fade" mode="out-in">
      <home></home>
    </transition> -->
    <home v-if="isHome" />
    <transition v-else name="fade" mode="out-in">
      <view-display @hideFooter="hideShowFooter"> </view-display
    ></transition>
    <site-footer
      :class="{ '--menu-open': menuIsOpen }"
      :hideFooter="hideFooter"
    />
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import SiteMenu from "./components/SiteMenu.vue";
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
    SiteMenu,
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
  background: linear-gradient(106.35deg, #0c0b18 43.66%, #000000 56.4%);

  & img {
    z-index: -10;
    // width: 400px;
    // max-width: 100%;
    height: 100%;
    // max-height: 500px;
    width: 100%;
    object-fit: contain;
    // margin-left: auto;
    // display: block;
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

// @include atDesktop {
//   .bg-image-container {
//     padding: 100px 200px 50px 0;
//   }
// }

.fade-enter-active {
  transition: all 0.8s ease;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  /* transform: translateX(10px); */
  opacity: 0;
}
</style>
