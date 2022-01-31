<template>
  <div>
    <news-item
      v-for="(newsItem, index) in newsItems"
      :key="index"
      :newsItem="newsItem"
    />
  </div>
</template>

<script>
import sanity from "../sanity";
import NewsItem from "../components/NewsItem.vue";

const query = `*[_type == "newsItems"]`;

export default {
  components: { NewsItem },
  data() {
    return {
      newsItems: [],
    };
  },

  created() {
    this.fetchData().then((payload) => {
      this.newsItems = payload;
    });
  },

  methods: {
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (newsitems) => {
          return newsitems;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style lang='scss' scoped>
</style>