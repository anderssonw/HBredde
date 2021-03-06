import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: Base,
        children: [
            {
                path: '/fines',
                name: 'FineView',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/FineView.vue'
                    ),
            },
            {
                path: '/users',
                name: 'UsersView',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/UsersView.vue'
                    ),
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
