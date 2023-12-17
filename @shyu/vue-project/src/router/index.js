//  前端路由，用來做SPA的切換頁面

import { createRouter, createWebHistory } from "vue-router";
import TestView from "../views/TestView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "test",
            component: TestView,
        },
        // {
        //     path: "/",
        //     name: "home",
        //     component: HomeView,
        // },
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import("../views/AboutView.vue"),
        // },
    ],
});

export default router;
