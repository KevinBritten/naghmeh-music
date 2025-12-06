import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Music from "../views/Music.vue";
import Merch from "../views/Merch.vue";
import Videos from "../views/Videos.vue";
import Photos from "../views/Photos.vue";
import Contact from "../views/Contact.vue";
import Shows from "../views/Shows.vue";
import Press from "../views/Press.vue";

const routes = [
  { path: "/", redirect: "/home/en" },
  {
    path: "/home/:lang?",
    name: "home",
    component: Home,
    meta: { frenchName: "home" }
  },
  {
    path: "/about/:lang?",
    name: "about",
    component: About,
    meta: { frenchName: "à propos" }
  },
  {
    path: "/music/:lang?",
    name: "music",
    component: Music,
    meta: { frenchName: "musique" }
  },
  {
    path: "/store/:lang?",
    name: "store",
    component: Merch,
    meta: { frenchName: "boutique" }
  },
  {
    path: "/videos/:lang?",
    name: "videos",
    component: Videos,
    meta: { frenchName: "vidéos" }
  },
  {
    path: "/photos/:lang?",
    name: "photos",
    component: Photos,
    meta: { frenchName: "photos" }
  },
  {
    path: "/contact/:lang?",
    name: "contact",
    component: Contact,
    meta: { frenchName: "contact" }
  },
  {
    path: "/shows/:lang?",
    name: "shows",
    component: Shows,
    meta: { frenchName: "spectacles" }
  },
  {
    path: "/press/:lang?",
    name: "press",
    component: Press,
    meta: { frenchName: "médias" }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

//append language to url if none provided
router.beforeEach((to, from, next) => {
  if (to.params.lang === undefined && to.name) {
    next({ name: to.name, params: { ...to.params, lang: "en" } });
  } else {
    next();
  }
});

export default router;
