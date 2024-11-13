import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import(/* webpackChunkName: "Home" */ '../views/HomeView.vue'),
        meta: { title: 'Yo' }
    },
    {
        path: '/languages',
        name: 'Languages',
        component: () => import(/* webpackChunkName: "Languages" */ '../components/LanguagesComponent.vue'),
        meta: { title: 'Lenguajes' }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '../components/ContactComponent.vue'),
        meta: { title: 'Contacto' }
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import(/* webpackChunkName: "Works" */ '../components/WorksComponent.vue'),
        meta: { title: 'Trabajos' }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: () => import(/* webpackChunkName: "Not Found" */ '../views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const baseTitle = "Portafolio MR";
    document.title = to.meta.title ? `${baseTitle} - ${to.meta.title}` : baseTitle;
    next();
});

export default router;
