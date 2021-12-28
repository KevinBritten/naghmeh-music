<template>
  <div class="site-header">
    <div class="site-header__link-container" @click="closeMenu">
      <div v-for="route in routes" :key="route.path">
        <router-link :to="route.path ? route.path : '/'">{{
          route.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpen"],
  computed: {
    routes() {
      return this.$router.getRoutes().filter((r) => {
        return r.name;
      });
    },
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<style  lang="scss" scoped >
@import ".././styles/mixins.scss";
.site-header {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  z-index: 80;
  color: white;
  &__link-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
}

a {
  display: block;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin: 10px 0;
}

@include atDesktop {
  .site-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
  }
}
</style>
