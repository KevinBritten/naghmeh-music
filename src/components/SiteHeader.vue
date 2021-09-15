<template>
  <div class="site-header">
    <img
      class="site-header__logo"
      src="../assets/naghmeh-old-logo-temp-resized.png"
    />
    <div
      class="site-header__hamburger-menu"
      :class="{ 'site-header__hamburger-menu--clicked': menuIsOpened }"
      @click="toggleMenu"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpened"],
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
  },
};
</script>

<style scoped>
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
  &__logo {
    height: 100%;
  }
  &__hamburger-menu {
    position: relative;
    width: 40px;
    height: 2px;
    background: #fff;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      left: 0;
      transform-origin: center center;
      transition: transform 0.25s ease, top 0.25s ease, bottom 0.25s ease;
    }

    &:before {
      top: -10px;
    }

    &:after {
      bottom: -10px;
    }
    &--clicked {
      background: transparent;

      &:before,
      &:after {
        background: white;
      }
      &:before {
        transform: rotate(45deg);
        top: 0;
      }
      &:after {
        transform: rotate(-45deg);
        bottom: 0;
      }
    }
  }
}
</style>
