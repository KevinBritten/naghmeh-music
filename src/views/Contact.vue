<template>
  <div>
    <p>
      For booking inquiries or any other information, email
      {{ email }} or text {{ phoneNumber }}
    </p>
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
      email: "",
      phoneNumber: "",
    };
  },
  created() {
    this.fetchData().then((payload) => {
      this.email = payload.email;
      this.phoneNumber = payload.phone;
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

<style scoped>
p {
  margin-top: 50px;
  text-align: center;
}
</style>
