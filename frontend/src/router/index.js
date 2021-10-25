import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue"
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Test from "../components/Test.vue"
import massage from "../components/Massage.vue"
const Profile = () => import("../components/Profile.vue")

const BoardUser = () => import("../components/BoardUser.vue")


const routes = [
  // {
  //   path: "/test",
  //   // alias: "/api/auth/:id/:authkey",
  //   component: Test
  // },

  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
 
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: '/api/auth/:id/:authkey',
    // alias: "/api/auth/:id/:authkey",
    component: Test
  },
 
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
 

  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },



  {
    path: "/massage",
    name: 'mass',
    component: massage,
  },
];

const router = createRouter({
  // mode: 'history',

  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/user', '/profile'];
  const authRequired = publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;