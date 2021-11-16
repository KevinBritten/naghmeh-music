<template>
  <div class="hamburger-container" @click="toggleMenu">
    <div
      class="hamburger-button"
      :class="{ 'hamburger-button--clicked': menuIsOpen }"
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
  top: 14px;
  z-index: 100;
  height: 40px;
  width: 40px;
}
.hamburger-button {
  position: absolute;
  top: 50%;
  width: 35px;
  height: 2px;
  right: 0;
  background: var(--c-grey);
  border: 2px solid var(--c-grey);
  border-radius: 2px;
  border-top: none;
  border-bottom: none;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: -2px;
    transform-origin: center center;
    transition: transform 0.25s ease, top 0.25s ease, bottom 0.25s ease;
    border: 2px solid var(--c-grey);
    border-radius: 2px;
    border-top: none;
    border-bottom: none;
  }

  &:before {
    top: -10px;
  }

  &:after {
    bottom: -10px;
  }
  &--clicked {
    background: transparent;
    border: none;

    &:before,
    &:after {
      background: var(--c-grey);
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
