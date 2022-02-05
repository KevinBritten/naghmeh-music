import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Music from "./views/Music.vue";
import Merch from "./views/Merch.vue";
import Videos from "./views/Videos.vue";
import Photos from "./views/Photos.vue";
import Contact from "./views/Contact.vue";
import Shows from "./views/Shows.vue";
import Press from "./views/Press.vue";

export const routes = [
  { path: "/", redirect: { name: "home" } },
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
    meta: { frenchName: "a propos" }
  },
  {
    path: "/music/:lang?",
    name: "music",
    component: Music,
    meta: { frenchName: "musique" }
  },
  {
    path: "/merch/:lang?",
    name: "merch",
    component: Merch,
    meta: { frenchName: "merch" }
  },
  {
    path: "/videos/:lang?",
    name: "videos",
    component: Videos,
    meta: { frenchName: "videos" }
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
    meta: { frenchName: "presse" }
  }
];
