import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

import "normalize.css";
import "./styles/global.sass";
import "./styles/fonts.sass";
import "./styles/mixins.scss";

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
