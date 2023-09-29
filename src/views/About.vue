<template>
  <div>
    <div
      class="about-item"
      :class="{ 'about-item--reverse': index % 2 }"
      v-for="(block, index) in bio"
      :key="index"
    >
      <BlockContent :blocks="getCurrentBlock(index)" />
      <img
        v-if="images[index]"
        :alt="images[index].name"
        :data-srcset="
          `${imageUrlFor(images[index].image).width(300)} 300w,
                    ${imageUrlFor(images[index].image).width(600)} 600w,
                    ${imageUrlFor(images[index].image).width(
                      800
                    )} 800w,          
                    ${imageUrlFor(images[index].image).width(
                      1200
                    )} 1200w,          
                    ${imageUrlFor(images[index].image).width(
                      1600
                    )} 1600w,          
                    ${imageUrlFor(images[index].image).width(
                      2000
                    )} 2000w,          
           `
        "
        data-sizes="(min-width: 991px) 28vw, (min-width: 767px) 40vw, 100vw,"
        :data-src="`${imageUrlFor(images[index].image)}`"
        class="lazyload"
      />
    </div>
  </div>
</template>
<script>
import sanity from "../sanity";
import BlockContent from "sanity-blocks-vue-component";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "information"]`;

export default {
  components: { BlockContent },
  data() {
    return {
      bio: [],
      images: []
    };
  },
  created() {
    this.fetchData().then(payload => {
      this.bio = payload.bio;
      this.images = payload.bioImages;
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
    },
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    getCurrentBlock(index) {
      let blocks = [];
      blocks.push(this.bio[index]);
      return blocks;
    }
  }
};
</script>
<style lang="scss" scoped>
@import ".././styles/mixins.scss";

p {
  padding: 15px 10px 10px;
  margin: 0 0 15px 0;
  text-align: left;
}

img {
  max-width: 100%;
  max-height: 400px;
}

.about-item {
  margin: 15px auto;
}

@include atTabletPortrait {
  .about-item {
    display: flex;
    align-items: center;
    margin: 30px auto;
    flex-direction: row-reverse;
    max-width: 800px;

    & p {
      margin-left: 40px;
    }
    &--reverse {
      flex-direction: row;
      & p {
        margin-left: 0px;
        margin-right: 40px;
      }
    }
    & img {
      object-fit: contain;
      max-height: 225px;
    }
  }
}
@include atDesktop {
  .about-item {
    margin: 80px auto;
    max-width: 1000px;
    & p {
      margin-left: 40px;
    }
    &--reverse {
      & p {
        margin-left: 0px;
        margin-right: 40px;
      }
    }
    & img {
      max-height: 400px;
    }
  }
}
</style>
