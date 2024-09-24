import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Elements from "@/components/Elements.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: "/:key", component: Elements },
      { path: "/:key/:view", component: Elements },
    ],
  },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
