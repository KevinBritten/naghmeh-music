<template>
  <div>
    <BlockContent :blocks="bio" />
  </div>
</template>
<script>
import sanity from "../sanity";
import BlockContent from "sanity-blocks-vue-component";

const query = `*[_type == "information"]`;

export default {
  components: { BlockContent },
  data() {
    return {
      bio: [],
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.bio = payload;
    });
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      return sanity.fetch(query).then(
        (information) => {
          return information[0].bio;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>
<style scoped>
p {
  padding: 15px 10px 10px;
  margin-top: 0;
  text-align: left;
}
</style>
