import Vue from 'vue'
import VueRouter from 'vue-router'
// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
// views without layouts
import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [  
        {
          path: "/admin",
          redirect: "/admin/dashboard",
          component: Admin,
          children: [
            {
              path: "/admin/dashboard",
              component: Dashboard,
            },
            {
              path: "/admin/settings",
              component: Settings,
            },           
          ],
        },
        {
          path: "/auth",
          redirect: "/auth/login",
          component: Auth,
          children: [
            {
              path: "/auth/login",
              component: Login,
            },
            {
              path: "/auth/register",
              component: Register,
            },
          ],
        },        
        {
          path: "/profile",
          component: Profile,
        },
        {
          path: "/",
          component: Landing,
        },
        { path: "*", redirect: "/" },
      ]
})