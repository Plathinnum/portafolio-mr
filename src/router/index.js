import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: () => import(/* webpackChunkName: "App" */ '../App.vue'),
    // },
    {
        path: '',
        name: 'HomeView',
        component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue'),
    },
    {
        path: '/languages',
        name: 'Languages',
        component: () => import(/* webpackChunkName: "Languages" */ '../components/LanguagesComponent.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '../components/ContactComponent.vue'),
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import(/* webpackChunkName: "Works" */ '../components/WorksComponent.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
