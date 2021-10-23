import { createWebHistory, createRouter } from "vue-router";

import Home from "../components/Home.vue"
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Test from "../components/Test.vue"
import massage from "../components/Massage.vue"
const Profile = () => import("../components/Profile.vue")

const BoardUser = () => import("../components/BoardUser.vue")


const routes = [
  {
    path: "/:authkey",
    component: Test
  },

  {
    path: "/",
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
    name: 'massage',
    component: massage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home', '/massage'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
  if (authRequired && !loggedIn) {
    // next('/login');
  } else {
    next();
  }
});

export default router;