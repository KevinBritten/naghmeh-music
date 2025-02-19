<template>
  <div class="home">
    <div class="bg-image-container">
      <picture>
        <source
          media="(min-width:1200px)"
          srcset="../assets/bg-photo-desktop.webp"
        />
        <source
          media="(min-width:900px)"
          srcset="../assets/bg-photo-tablet-landscape.webp"
        />
        <source
          media="(min-width:600px)"
          srcset="../assets/bg-photo-tablet-portrait.webp"
        />

        <img src="../assets/bg-photo-mobile.webp" alt="Naghmeh with a guitar" />
      </picture>
    </div>
    <div class="home__title-container">
      <img src="../assets/hero-title.webp" alt="Naghmeh Shafiei" />
    </div>
    <div class="home__buttons-container">
      <!-- <router-link
        :to="{ name: button.target, params: { lang: this.$route.params.lang } }"
        ><BlockContent :blocks="callToAction"
      /></router-link> -->
      <p style="margin-bottom:21px">
        <span style="font-size:2rem">
          {{
            $route.params.lang === "fr" ? "DISPONIBLE MAINTENANT" : "OUT NOW"
          }}</span
        >
        <br />
        The Situation
      </p>
      <a
        href="https://distrokid.com/hyperfollow/naghmeh/the-situation"
        target="_blank"
      >
        <button>
          {{
            $route.params.lang === "fr"
              ? "Écoutez sur Bandcamp"
              : "Listen on Bandcamp"
          }}
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import NewsletterSignup from "../components/NewsletterSignup.vue";
import sanity from "../sanity";
import BlockContent from "sanity-blocks-vue-component";

const query = `*[_type == "information"]`;
export default {
  components: { NewsletterSignup, BlockContent },

  data() {
    return {
      callToAction: [],
      payload: null,
      button: {}
    };
  },

  created() {
    this.fetchData().then(payload => {
      this.callToAction = payload.callToAction;
      this.button = payload.homepageButton;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      return sanity.fetch(query).then(
        information => {
          const info =
            this.$route.params.lang === "fr" ? information[0] : information[1];
          return info;
        },
        error => {
          this.error = error;
        }
      );
    }
  }
};
</script>

<style scoped lang="scss">
@import ".././styles/mixins.scss";

a {
  margin: 0 auto;

  padding: 5px 15px 7px;
  display: block;
  color: white;
  text-decoration: none;
  text-align: center;
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
      margin-bottom: 30px;
    }
    p {
      align-self: flex-start;
    }
  }
  &__buttons-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 150px;

    a,
    button {
      font-family: "Bodoni Moda", serif;
      color: white;
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      font-size: 3.5rem;
      line-height: unset;
      text-align: center;
    }
    a {
      padding: 0;
    }
    button {
      background-color: rgba(0, 0, 0, 0.5);
      border: 2px solid white;
      border-radius: 5px;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      margin: 0;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
      }
    }
  }
}
p {
  margin: 5px auto;
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
      // padding-left: 20%;

      img {
        width: 50%;
        max-width: 600px;
      }
    }
    &__buttons-container {
      // padding-left: 20%;
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
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
