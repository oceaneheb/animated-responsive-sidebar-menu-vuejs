import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Course from '../views/Course.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/course',
            component: Course
        },
        {
            path: '/class',
            component: () => import('../views/Class.vue')
        },
        {
            path: '/profile',
            component: () => import('../views/Profile.vue')
        },
        {
            path: '/news',
            component: () => import('../views/News.vue')
        },
        {
            path: '/settings',
            component: () => import('../views/Settings.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router;