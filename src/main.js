import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vue2TouchEvents from "vue2-touch-events";
import "lazysizes";

import { routes } from "./routes";

import "normalize.css";
import "./styles/global.css";
import "./styles/fonts.sass";
import "./styles/mixins.scss";

const router = new VueRouter({
  mode: "history",
  routes
});

//append language to url if none provided
router.beforeEach((to, from, next) => {
  if (to.params.lang === undefined) {
    next({ path: to.name + "/en" });
  } else next();
});

Vue.use(VueRouter).use(Vue2TouchEvents);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
