import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        name: 'login',
        path: '/',
        component: () => import('@/view/login/login'),
        meta: {
            title: '登录',
        },
    },
    {
        name: 'home',
        path: '/home',
        component: () => import('@/view/home/home')
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export { router };
