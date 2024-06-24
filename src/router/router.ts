import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Albums from "../components/Albums.vue";
import Aboutus from "../components/Aboutus.vue";
import Contactus from "../components/Contactus.vue";
import Albumdetails from "../components/Albumdetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/albums", component: Albums },
  { path: "/albums/:id", component: Albumdetails },
  { path: "/aboutus", component: Aboutus },
  { path: "/contactus", component: Contactus },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
