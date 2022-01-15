<template>
  <div>
    <p>For all inquiries please contact Naghmeh at naghmehasong@gmail.com</p>
    <form>
      <label for="name">Name</label>
      <input v-model="formData.name" />
      <label for="email">Email</label>
      <input v-model="formData.email" />
      <label for="message">Message</label>
      <textarea v-model="formData.message"></textarea>
      <button type="button" v-on:click="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
import sanity from "../sanity";
// import ContactForm from "../components/ContactForm.vue";

const query = `*[_type == "information"]`;
export default {
  // components: { ContactForm },
  data() {
    return {
      email: "",
      phoneNumber: "",
      formData: { name: "", email: "", message: "" },
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
    submit() {
      const { name, email, message } = this.formData;
    },
  },
};
</script>

<style scoped>
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

button:active {
  background-color: var(--c-footer-bg);
  color: white;
}
</style>
