import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "lazysizes";

import "normalize.css";
import "./styles/global.css";
import "./styles/fonts.sass";
import "./styles/mixins.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
