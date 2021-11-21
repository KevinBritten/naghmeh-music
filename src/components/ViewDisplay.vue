<template>
  <div class="view-display">
    <h2 v-show="$route.path !== '/'">{{ $route.name }}</h2>
    <router-view />
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
@import ".././styles/mixins.scss";

.view-display {
  height: 100%;
  background-color: var(--c-page-background);
  padding: 10px 10px;
  overflow: scroll;
  text-align: center;
}
h2 {
  text-align: center;
  text-transform: uppercase;
}

h2::before,
h2::after {
  content: "";
  height: 0.4rem;
  width: 0.4rem;
  margin: 0 0.5rem 0.3rem;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
}

@include atTabletPortrait {
  .view-display {
    padding: 100px;
  }
}

@include atDesktop {
  .view-display {
    padding: 50px 300px;
  }
}
</style>
