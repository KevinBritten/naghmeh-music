<template>
  <div>
    <p
      class="newsletter-signup__success-message"
      v-if="formState === 'submitted'"
    >
      {{ submmittedMessage[lang] }}
    </p>
    <div v-else class="newsletter-signup">
      <p>{{ signupMessage[lang] }}</p>
      <form>
        <input v-model="email" />
        <button type="button" v-on:click="submit($event)">
          {{ submitMessage[lang] }}
        </button>
      </form>
      <p v-if="formState === 'error'" class="newsletter-signup__error-message">
        {{ errorMessage[lang] }}
      </p>
    </div>
  </div>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      formState: "initial",
      errorMessage: {
        en: "Sorry, there was an error submitting your email. This could be because you've already signed up.",
        fr: "Désolé, une erreur s'est produite lors de l'envoi de votre e-mail. Cela pourrait être parce que vous êtes déjà inscrit.",
      },
      signupMessage: {
        fr: "Enregistrez-vous pour recevoir le bulletin d'informations!",
        en: "Signup for the newsletter!",
      },
      submitMessage: {
        fr: "ENVOYER",
        en: "SUBMIT",
      },
      submmittedMessage: { fr: "Envoyé!", en: "Submitted!" },

      lang: "",
    };
  },
  created() {
    this.lang = this.$route.params.lang;
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      const results = await axios
        .get("/.netlify/functions/mailchimp", {
          params: { email: this.email },
        })
        .then(() => {
          this.formState = "submitted";
        })
        .catch(() => {
          this.formState = "error";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.newsletter-signup {
  width: 80%;
  max-width: 800px;
  margin: auto;
  & p {
    margin-bottom: 30px;
  }
  & form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    margin: auto;
  }
  & input {
    margin-right: 10px;
    margin-bottom: 10px;
    max-width: 300px;
    height: 40px;
    width: 100%;
    background-color: transparent;
    border: 2px var(--c-footer-bg) solid;
    border-radius: 5px;
  }
  & button {
    background-color: transparent;
    border: 1px black solid;
    border-radius: 5px;
    padding: 5px 10px 7px;
    transition: background-color 150ms;
  }

  & button:active,
  button:hover {
    background-color: var(--c-footer-bg);
    color: white;
  }

  & button:active {
    color: black;
  }
  &__success-message,
  &__error-message {
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 5px;
    display: inline-block;
  }

  &__error-message {
    background-color: var(--c-error);
  }

  &__success-message {
    background-color: var(--c-success);
  }
}
</style>