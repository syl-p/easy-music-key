import { createRouter, createWebHashHistory } from "vue-router";
import Elements from "@/components/Elements.vue";

const routes = [
  {
    path: "/:key/:view?",
    component: Elements,
    name: "keyTable",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
