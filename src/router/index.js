import { createRouter, createWebHistory } from "vue-router";

import MainScreen from "../components/MainScreen.vue";
import SecondScreen from "../components/SecondScreen.vue";

const routes = [
    {
        path: "/",
        name: "MainScreen",
        component: MainScreen,
    },
    {
        path: "/login",
        name: "SecondScreen",
        component: SecondScreen,
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
