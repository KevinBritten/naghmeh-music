<template>
  <div class="home">
    <div class="home__header-container">
      <h1 class="home__header">
        <span class="home__header-before"
          ><span
            class="
              home__header-large-letter home__header-large-letter--first-line
            "
            >N</span
          >AG</span
        ><span class="home__header-anchor-letter">H</span
        ><span class="home__header-after">MEH</span>
      </h1>
      <h1 class="home__header home__header--second-line">
        <span class="home__header-before"
          ><span
            class="
              home__header-large-letter home__header-large-letter--second-line
            "
            >S</span
          ></span
        ><span class="home__header-anchor-letter">H</span
        ><span class="home__header-after">AFIEI</span>
      </h1>
    </div>
    <p>new single ‘A Great Song’<br/> availble now on Spotify</br> and Youtube</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  position: relative;
  padding-top: 120px;
  color: white;
  p {
    padding-left: 10px;
  }
  &__header {
    position: absolute;
    left: 42%;
    top: 0;

    &-container {
      position: relative;
      height: 10rem;
    }
    &-anchor-letter {
      position: relative;
      display: block;
    }
    &-before {
      position: absolute;
      right: 100%;
      bottom: 0;
    }
    &-after {
      position: absolute;
      left: 100%;
      bottom: 0;
    }
    &--second-line {
      top: 2.5rem;
    }
    &-large-letter {
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
}
#first-h {
  position: relative;
  display: block;
}
</style>