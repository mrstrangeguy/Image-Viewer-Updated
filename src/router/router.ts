import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Albums from "../components/Albums.vue";
import Aboutus from "../components/Aboutus.vue";
import Contactus from "../components/Contactus.vue";
import Albumdetails from "../components/Albumdetails.vue";

const routes = [
  { path: "/", component: Home, props: true },
  { path: "/albums", component: Albums, props: true },
  { path: "/albums/:id", component: Albumdetails },
  { path: "/aboutus", component: Aboutus, props: true },
  { path: "/contactus", component: Contactus, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, __, savedPosition) {
    if (to.fullPath === "/albums") {
      if (savedPosition) return savedPosition;

      const element = document.getElementById("selected-album");

      if (element) return { top: element.offsetTop - 150, left: 0 };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
