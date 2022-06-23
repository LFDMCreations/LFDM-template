import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
      path: "/content/:month/:year",
      name: "content",
      component: () => import(/* webpackChunkName: "content" */ "../views/ContentView.vue")
    }
  ],
});

export default router;
