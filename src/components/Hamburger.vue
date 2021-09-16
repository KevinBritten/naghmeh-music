<template>
  <div class="hamburger-container" @click="toggleMenu">
    <div
      class="hamburger-menu"
      :class="{ 'hamburger-menu--clicked': menuIsOpen }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpen"],
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    },
  },
};
</script>

<style scoped>
.hamburger-container {
  position: fixed;
  right: 20px;
  top: 10px;
  z-index: 100;
  height: 40px;
  width: 40px;
}
.hamburger-menu {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 2px;
  right: 0;
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
</style>
