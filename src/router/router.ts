import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Albums from "../components/Albums.vue";
import Aboutus from "../components/Aboutus.vue";
import Contactus from "../components/Contactus.vue";
import Albumdetails from "../components/Albumdetails.vue";

const routes = [
  { path: "/", component: Home,props:true },
  { path: "/albums", component: Albums,props:true  },
  { name:'albumdetails', path: "/albumdetails", component: Albumdetails,props:true  },
  { path: "/aboutus", component: Aboutus,props:true  },
  { path: "/contactus", component: Contactus,props:true  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
