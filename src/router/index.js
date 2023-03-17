import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import KatalogView from "../views/KatalogView.vue";
import PesananView from "../views/PesananView.vue";
import DetailView from "../views/DetailView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/katalog",
    name: "katalog",
    component: KatalogView,
  },
  {
    path: "/katalog:id",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/pesanan",
    name: "pesanan",
    component: PesananView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
