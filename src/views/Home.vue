<template>
  <div class="home">
    <div class="home__title-container">
      <site-title />
      <p>{{ tagline }}</p>
    </div>
    <div class="home__buttons-container">
      <router-link :to="button.target" tag="button">{{
        button.text
      }}</router-link>
      <input type="text" placeholder="join mailing list" />
      <button>Submit</button>
    </div>
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
      button: {},
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.tagline = payload.tagline;
      this.button = payload.homepageButton;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      return sanity.fetch(query).then(
        (information) => {
          return information[0];
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

button {
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 5px 5px 7px;
}

.home {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 20px;
  color: white;
  align-items: center;
  justify-content: space-between;

  &__title-container {
    width: 100%;
  }
  &__buttons-container {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
  }
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