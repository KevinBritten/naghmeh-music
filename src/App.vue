<template>
  <div id="app">
    <site-menu
      :menu-is-open="menuIsOpen"
      @close-menu="menuIsOpen = false"
      @show-footer="hideShowFooter"
    ></site-menu>
    <div :class="{ '--menu-open': menuIsOpen }" class="header-logo-container">
      <header-logo @close-menu="menuIsOpen = false" />
    </div>
    <hamburger
      @toggle-menu="menuIsOpen = !menuIsOpen"
      :menu-is-open="menuIsOpen"
    />
    <transition v-if="isHome" name="fade" mode="out-in">
      <home />
    </transition>

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
  padding: 0px 0 0;
  overflow: hidden;
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
  #app {
    height: 100%;
    padding: 70px 0 0;
    overflow: hidden;
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
}

.fade-enter-active {
  transition: all 0.4s ease;
}

.fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
