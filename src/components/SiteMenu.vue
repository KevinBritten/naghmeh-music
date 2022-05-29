<template>
  <div class="site-menu" :class="{ 'site-menu--open': menuIsOpen }">
    <div class="site-menu__link-container" @click="resetMenuAndFooter">
      <div v-for="route in routes" :key="route.path">
        <router-link
          :to="{
            path: route.path
              ? `/${route.name}/${$route.params.lang}`
              : `/home/${$route.params.lang}`,
          }"
          >{{
            $route.params.lang === "fr" ? route.meta.frenchName : route.name
          }}</router-link
        >
      </div>
    </div>
    <div class="site-menu__lang-buttons-container">
      <a :href="`/${$route.name}/fr`" v-if="$route.params.lang === 'en'">FR</a
      ><a :href="`/${$route.name}/en`" v-else>EN</a>
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
    resetMenuAndFooter() {
      this.$emit("close-menu");
      this.$emit("show-footer", false);
    },
  },
};
</script>

<style  lang="scss" scoped >
@import ".././styles/mixins.scss";
.site-menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  background-color: black;
  padding: 75px 0 100px;
  overflow: auto;
  z-index: 10;
  &--open {
    display: flex;
  }
  &__link-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
  }
  &__lang-buttons-container {
    padding-top: 20px;
  }
}
a {
  display: block;
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  margin: 15px 10px;
}
@include atTabletPortrait {
  .site-menu {
    justify-content: center;
  }
  a {
    font-size: 1.7rem;
  }
}
@include atDesktop {
  .site-menu {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    padding: 10px 40px 10px 140px;
    border-bottom: rgb(12, 12, 12) 1px solid;
    overflow: hidden;
    &__link-container {
      flex-direction: row;
      justify-content: space-around;
      flex-grow: 1;
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
    font-size: 1.2rem;
    width: 100%;
  }
}
</style>
