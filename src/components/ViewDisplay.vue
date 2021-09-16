<template>
  <div
    class="view-display"
    :class="{ 'view-display--home': $route.path === '/' }"
  >
    <h2 v-show="$route.path !== '/'">{{ $route.name }}</h2>
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

<style lang='scss' scoped>
.view-display {
  height: 100%;
  background-color: var(--c-page-background);
  padding: 10px 10px;
  overflow: scroll;
  &--home {
    background-color: transparent;
    overflow: visible;
  }
}
h2 {
  text-align: center;
  text-transform: uppercase;
}

h2::before,
h2::after {
  content: "";
  height: 0.7rem;
  width: 0.7rem;
  margin: 0 1rem 0.2rem;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}
</style>
