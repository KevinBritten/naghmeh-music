<template>
  <div class="media-item">
    <h3>{{ mediaItem.name }}</h3>
    <p v-if="mediaItem.subtitle">{{ mediaItem.subtitle }}</p>

    <iframe
      :src="mediaItem.url"
      allowfullscreen
      width="560"
      height="315"
      :title="`YouTube video player - ` + mediaItem.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</template>

<script>
export default { props: ["mediaItem"] };
</script>

<style scoped lang="scss">
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

.media-item {
  margin-bottom: 50px;
}
</style>