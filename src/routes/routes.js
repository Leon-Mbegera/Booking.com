import { createRouter, createWebHistory } from "vue-router";

const SignUp = () => import('../views/SignUp.vue');
const Bookings = () => import('../views/Booking.vue');
const Appointments = () => import('../views/Appointments.vue');


const routes = [
    {
        path: "/",
        name: "Bookings",
        component: Bookings
    },
    {
        path: "/myappointments",
        name: "Appointments",
        component: Appointments
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