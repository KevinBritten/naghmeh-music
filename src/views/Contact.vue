<template>
  <div>
    <form>
      <label for="name">Name</label>
      <input />
      <label for="email">Email</label>
      <input />
      <label for="message">Message</label>
      <textarea></textarea>
      <button type="button">SUBMIT</button>
    </form>
    <p>For all inquiries please contact Naghmeh at naghmehasong@gmail.com</p>
  </div>
</template>

<script>
import sanity from "../sanity";

const query = `*[_type == "information"]`;
export default {
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
