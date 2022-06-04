<template>
  <div class="home">
    <div class="bg-image-container">
      <picture>
        <source
          media="(min-width:1200px)"
          srcset="../assets/bg-photo-desktop.jpg"
        />
        <source
          media="(min-width:900px)"
          srcset="../assets/bg-photo-tablet-landscape.jpg"
        />
        <source
          media="(min-width:600px)"
          srcset="../assets/bg-photo-tablet-portrait.jpg"
        />

        <img src="../assets/bg-photo-mobile.jpg" alt="Naghmeh with a guitar" />
      </picture>
    </div>
    <div class="home__title-container">
      <img src="../assets/hero-title.svg" alt="Naghmeh Shafiei" />
    </div>
    <div class="home__buttons-container">
      <router-link
        :to="{ name: button.target, params: { lang: this.$route.params.lang } }"
        tag="button"
        >{{ button.text }}</router-link
      >
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
          const info =
            this.$route.params.lang === "fr" ? information[0] : information[1];
          return info;
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
  transition: background-color 150ms;
  border-radius: 5px;
}
button:active,
button:hover {
  border-radius: 5px;

  background-color: var(--c-footer-bg);
  color: white;
}

.home {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
  padding: 90px 0 20px;

  &__title-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 80%;
      margin-bottom: 50px;
      max-width: 450px;
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

.bg-image-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0px;
  left: 0;
  z-index: -10;
  width: 100%;
  background: linear-gradient(106.35deg, #0c0b18 43.66%, #000000 56.4%);

  & img {
    z-index: -10;
    height: 100%;
    width: 100%;
    min-width: 100%;
    object-fit: cover;

    object-position: center 100%;
  }
}
@include atTabletPortrait {
  p {
    padding-left: 60px;
  }
  .home {
    padding: 100px 0;
    &__title-container {
      img {
        max-width: 75%;
        width: 75%;
      }
    }
  }
}

@include atTabletLandscape {
  .home {
    padding: 40px 0;
    &__title-container {
      img {
        max-width: 450px;
      }
    }
  }
}

@include atDesktop {
  .home {
    padding: 60px 20px 100px;
    &__title-container {
      padding-left: 20%;

      img {
        width: 50%;
        max-width: 600px;
      }
    }
  }
  .bg-image-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    background: linear-gradient(106.35deg, #0c0b18 43.66%, #000000 56.4%);
    & img {
      z-index: -10;
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: -10% 100%;
    }
  }
}
</style>
