//  前端路由，用來做SPA的切換頁面

import { createRouter, createWebHistory } from "vue-router";
import TestView from "../stories/page/TestView.vue";
import HomeView from "../stories/page/HomeView.vue";
import CatView from "../stories/page/CatView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            children: [
                {
                    // child (第2層)
                    path: "/cat",
                    name: "cat",
                    component: CatView,
                },
            ],
        },
        {
            path: "/test",
            name: "test",
            component: TestView,
        },
    ],
});

export default router;
