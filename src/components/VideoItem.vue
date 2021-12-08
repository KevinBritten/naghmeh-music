<template>
  <div class="video-item">
    <iframe
      :src="videoItem.url"
      allowfullscreen
      width="560"
      height="315"
      :title="`YouTube video player - ` + videoItem.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
    <p v-if="videoItem.subtitle">{{ videoItem.subtitle }}</p>
  </div>
</template>

<script>
export default { props: ["videoItem"] };
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

p {
  margin: 0 0 10px;
}
h2 {
  text-decoration: underline;
  margin-bottom: 5px;
}

iframe {
  height: 360px;
  width: 100%;
  border: 0;
}

.video-item {
  margin-bottom: 50px;
}

@include atDesktop {
  iframe {
    height: 600px;
  }
}
</style>