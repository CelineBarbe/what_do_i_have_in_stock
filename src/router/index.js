import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fabrics",
    name: "Fabrics",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fabrics.vue"),
  },
  {
    path: "/threads",
    name: "Threads",
    component: () =>
      import( "../views/Threads.vue"),
  },
  {
    path: "/patterns",
    name: "Patterns",
    component: () =>
      import( "../views/Patterns.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
