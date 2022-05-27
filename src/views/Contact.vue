<template>
  <div>
    <p>{{ contactMessage[$route.params.lang] }} {{ email }}</p>
    <newsletter-signup></newsletter-signup>
  </div>
</template>

<script>
import sanity from "../sanity";
import NewsletterSignup from "../components/NewsletterSignup.vue";

const query = `*[_type == "information"]`;
export default {
  components: { NewsletterSignup },
  data() {
    return {
      email: "",
      phoneNumber: "",
      formData: { name: "", email: "", message: "" },
      contactMessage: {
        fr: "Pour toute demande de réservation, contactez nous au",
        en: "For all inquiries please contact us at",
      },
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

<style lang="scss" scoped>
p {
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  max-width: 800px;
  margin: auto;
}

input {
  max-width: 300px;
  height: 40px;
}

textarea {
  height: 140px;
}

textarea,
input {
  margin-bottom: 10px;
  width: 100%;
  background-color: transparent;
  border: 2px var(--c-footer-bg) solid;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}
button {
  background-color: transparent;
  border: 1px black solid;
  border-radius: 5px;
  padding: 5px 10px 7px;
}

button:hover {
  background-color: var(--c-footer-bg);
  color: white;
}
</style>
