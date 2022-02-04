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
  { path: "/home/:lang?", name: "home", component: Home },
  { path: "/about/:lang?", name: "about", component: About },
  { path: "/music/:lang?", name: "music", component: Music },
  { path: "/merch/:lang?", name: "merch", component: Merch },
  { path: "/videos/:lang?", name: "videos", component: Videos },
  { path: "/photos/:lang?", name: "photos", component: Photos },
  { path: "/contact/:lang?", name: "contact", component: Contact },
  { path: "/shows/:lang?", name: "shows", component: Shows },
  { path: "/press/:lang?", name: "press", component: Press }
];
