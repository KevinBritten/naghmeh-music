<template>
  <div class="home">
    <div class="home__title-container">
      <img src="../assets/hero-title.svg" alt="Naghmeh Shafiei" />
      <!-- <p>{{ tagline }}</p> -->
    </div>
    <div class="home__buttons-container">
      <router-link :to="button.target" tag="button">{{
        button.text
      }}</router-link>
    </div>
  </div>
</template>

<script>
import NewsletterSignup from "../components/NewsletterSignup.vue";
import sanity from "../sanity";

const query = `*[_type == "information"]`;
export default {
  components: { NewsletterSignup },
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
  margin: auto;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 5px 15px 7px;
}
button:active,
button:hover {
  border-radius: 5px;

  background-color: var(--c-footer-bg);
  color: white;
}

.home {
  position: relative;
  display: block;
  height: 100%;
  color: white;
  padding-top: 20px;

  &__title-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 70%;
      margin-bottom: 50px;
    }
    p {
      align-self: flex-start;
    }
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
@include atDesktop {
  .home {
    padding: 50px 20px 0px;
    &__title-container {
      img {
        width: 600px;
      }
    }
  }
}
</style>
