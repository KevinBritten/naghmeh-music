import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Music from "./views/Music.vue";
// import Merch from "./views/Merch.vue";
import Videos from "./views/Videos.vue";
import Photos from "./views/Photos.vue";
// import Contact from "./views/Contact.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/home", redirect: { name: "home" } },
  { path: "/about", name: "about", component: About },
  { path: "/music", name: "music", component: Music },
  // { path: "/merch", name: "merch", component: Merch },
  { path: "/videos", name: "videos", component: Videos },
  { path: "/photos", name: "photos", component: Photos }
  // { path: "/contact", name: "contact", component: Contact }
];
