<template>
  <div class="site-title__title-container">
    <h1 class="site-title">
      <span class="site-title__before"
        ><span
          class="site-title__large-letter site-title__large-letter--first-line"
          >N</span
        >AG</span
      ><span class="site-title__anchor-letter">H</span
      ><span class="site-title__after">MEH</span>
    </h1>
    <h1 class="site-title site-title--second-line">
      <span class="site-title__before"
        ><span
          class="site-title__large-letter site-title__large-letter--second-line"
          >S</span
        ></span
      ><span class="site-title__anchor-letter">H</span
      ><span class="site-title__after">AFIEI</span>
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site-title {
  position: absolute;
  left: 42%;
  top: 0;

  &__title-container {
    position: relative;
    height: 10rem;
  }
  &__anchor-letter {
    position: relative;
    display: block;
  }
  &__before {
    position: absolute;
    right: 100%;
    bottom: 0;
  }
  &__after {
    position: absolute;
    left: 100%;
    bottom: 0;
  }
  &--second-line {
    top: 2.5rem;
  }
  &__large-letter {
    font-size: 1.8em;
    &--second-line {
      display: block;
      line-height: 0;
      position: absolute;
      top: 1.2rem;
      right: -5px;
    }
    &--first-line {
      letter-spacing: -0.7rem;
    }
  }
}
#first-h {
  position: relative;
  display: block;
}
</style>