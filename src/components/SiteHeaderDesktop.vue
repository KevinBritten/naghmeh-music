<template>
  <div class="site-header">
    <div class="site-header__link-container">
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
  computed: {
    routes() {
      return this.$router.getRoutes().filter((r) => {
        return r.name;
      });
    },
  },
};
</script>

<style  lang="scss" scoped >
@import ".././styles/mixins.scss";
.site-header {
  display: none;
}
@include atDesktop {
  .site-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: black;
    display: block;
    padding: 10px 140px;
    border-bottom: rgb(12, 12, 12) 1px solid;
    &__link-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
  a {
    display: block;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin: 10px 0;
  }
}
</style>
