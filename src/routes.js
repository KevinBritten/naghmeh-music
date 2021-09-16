import Home from "./views/Home.vue";
import About from "./views/About.vue";
// import Music from "./views/Music.vue";
// import Merch from "./views/Merch.vue";
// import Video from "./views/Video.vue";
// import Photo from "./views/Photo.vue";
// import Contact from "./views/Contact.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/home", redirect: { name: "home" } },
  { path: "/about", name: "about", component: About }
  // { path: "/music", name: "music", component: Music },
  // { path: "/merch", name: "merch", component: Merch },
  // { path: "/video", name: "video", component: Video },
  // { path: "/photo", name: "photo", component: Photo },
  // { path: "/contact", name: "contact", component: Contact }
];
