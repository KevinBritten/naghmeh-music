<template>
  <div class="home">
    <site-title />
    <p>{{ tagline }}</p>
  </div>
</template>

<script>
import sanity from "../sanity";

import SiteTitle from "../components/SiteTitle.vue";

const query = `*[_type == "information"]`;
export default {
  components: { SiteTitle },
  data() {
    return {
      tagline: "",
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.tagline = payload;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      return sanity.fetch(query).then(
        (information) => {
          return information[0].tagline;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

.home {
  position: relative;
  padding-top: 20px;
  color: white;
}
p {
  padding-left: 20px;
  max-width: 190px;
}

@include atTabletPortrait {
  p {
    padding-left: 60px;
  }
}
</style>