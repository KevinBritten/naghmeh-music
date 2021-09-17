import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
import VueRouter from "vue-router";
import Loading from "./assets/icons/loading.svg";

import { routes } from "./routes";

import "normalize.css";
import "./styles/global.sass";
import "./styles/fonts.sass";
import "./styles/mixins.scss";

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.use(VueRouter).use(VueLazyload, {
  loading: Loading
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
