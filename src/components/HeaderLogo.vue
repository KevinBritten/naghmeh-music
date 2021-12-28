<template>
  <div @click="$emit('close-menu')">
    <router-link :to="`/`">
      <img
        class="header-logo"
        src="../assets/naghmeh-old-logo-temp-resized.png"
    /></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-logo {
  position: fixed;
  top: 14px;
  left: 14px;
  width: 40px;
  z-index: 60;
}
</style>