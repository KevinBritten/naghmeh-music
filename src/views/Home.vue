<template>
  <div class="home">
    <div class="home__title-container">
      <img src="../assets/hero-title.svg" alt="Naghmeh Shafiei" />
      <p>{{ tagline }}</p>
    </div>
    <div class="home__buttons-container">
      <router-link :to="button.target" tag="button">{{
        button.text
      }}</router-link>
      <div class="home__mailing-list-container">
        <input type="text" placeholder="join mailing list" />
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "information"]`;
export default {
  data() {
    return {
      tagline: "",
      button: {}
    };
  },
  created() {
    this.fetchData().then(payload => {
      this.tagline = payload.tagline;
      this.button = payload.homepageButton;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      return sanity.fetch(query).then(
        information => {
          return information[0];
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
  color: white;
  align-items: center;
  justify-content: space-between;
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
  &__mailing-list-container {
    display: flex;

    input {
      line-height: 1rem;
      display: block;
      margin-right: 10px;
      padding: 0 10px;
      width: 300px;
    }
    button {
      margin: 0;
      background: transparent;
      color: white;
    }
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
    padding: 20px 20px 0px;
    &__title-container {
      img {
        width: 500px;
      }
    }
  }
}
</style>
