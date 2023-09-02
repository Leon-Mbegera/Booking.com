import { createRouter, createWebHistory } from "vue-router";

const SignUp = () => import('../views/SignUp.vue');
const ListUsers = () => import('../views/ListUsers.vue');

const routes = [
    {
        path: "/",
        name: "Users",
        component: ListUsers
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    },   
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;