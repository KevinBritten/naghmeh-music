<template>
  <div class="news-item-container">
    <div v-for="(newsItem, index) in newsItems" :key="newsItem._id || newsItem.headline || index">
      <news-item :newsItem="newsItem" />
      <hr />
    </div>
  </div>
</template>

<script>
import sanity from "../sanity";
import NewsItem from "../components/NewsItem.vue";

const query = `*[_type == "newsItems"]|order(orderRank)`;

export default {
  components: { NewsItem },
  data() {
    return {
      newsItems: [],
    };
  },

  created() {
    this.fetchData().then((payload) => {
      if (payload) {
        this.newsItems = payload;
      }
    }).catch((error) => {
      console.error('Error fetching news items:', error);
      this.newsItems = [];
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
          return []; // Return empty array on error instead of undefined
        }
      );
    },
  },
};
</script>

<style lang='scss' scoped>
@use ".././styles/mixins.scss" as *;

@include atDesktop {
  .news-item-container {
    width: 800px;
    margin: auto;
  }
}
</style>

