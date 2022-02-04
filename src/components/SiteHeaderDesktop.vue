<template>
  <div class="site-header">
    <div class="site-header__link-container">
      <div v-for="route in routes" :key="route.path">
        <router-link
          :to="{
            path: route.path
              ? `/${route.name}/${$route.params.lang}`
              : `/home/${$route.params.lang}`,
          }"
          >{{ route.name }}</router-link
        >
      </div>
    </div>
    <div class="site-header__lang-buttons-container">
      <a :href="`/${$route.name}/fr`">FR</a
      ><a :href="`/${$route.name}/en`">EN</a>
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
    display: flex;
    padding: 10px 40px 10px 140px;
    border-bottom: rgb(12, 12, 12) 1px solid;
    &__link-container {
      display: flex;
      justify-content: space-around;
      flex-grow: 1;
      align-items: center;
      height: 100%;
    }
    &__lang-buttons-container {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 20px 0 80px;
      & a {
        margin-left: 10px;
        cursor: pointer;
      }
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
