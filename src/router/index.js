import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "AppLayoutLogin",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters.getLoginStatus) next({ name: "Home" });
      else next();
    },
    meta: {
      layout: "AppLayoutPanel",
    },
  },
  {
    path: "/user/:id",
    name: "User",
    component: () => import("../views/User.vue"),
    beforeEnter: (to, from, next) => {
      if (!store.getters.getLoginStatus) next({ name: "Home" });
      else next();
    },
    meta: {
      layout: "AppLayoutPanel",
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router