<template>
  <div class="site-header"></div>
</template>

<script>
export default {
  props: ["menuIsOpen"],
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
  z-index: 50;
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
