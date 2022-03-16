<template>
  <div class="view-display" @scroll="checkScrollDirection">
    <h2 v-show="$route.name !== 'home'">
      {{ $route.params.lang === "fr" ? $route.meta.frenchName : $route.name }}
    </h2>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { lastScrollPosition: 0 };
  },

  methods: {
    checkScrollDirection(f) {
      let hideFooter = false;
      var scrollTop = f.target.scrollTop;
      if (scrollTop > this.lastScrollPosition && scrollTop >= 10) {
        hideFooter = true;
      } else {
        hideFooter = false;
      }
      this.$emit("hideFooter", hideFooter);
      this.lastScrollPosition = scrollTop;
    },
  },
};
</script>

<style lang='scss' scoped>
@import ".././styles/mixins.scss";

.view-display {
  height: 100%;
  background-color: var(--c-page-background);
  padding: 10px 10px;
  overflow: scroll;
  text-align: center;
}
h2 {
  text-align: center;
  text-transform: uppercase;
}

h2::before,
h2::after {
  content: "";
  height: 0.4rem;
  width: 0.4rem;
  margin: 0 0.5rem 0.3rem;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

@include atTabletPortrait {
  .view-display {
    padding: 20px 60px;
  }
}

@include atDesktop {
  .view-display {
    padding: 60px 140px;

    // overflow: auto;
  }
}

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
