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
                path: '/boter',
                name: 'Boter',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ '../views/Boter.vue'
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
