import Vue from 'vue'
import VueRouter from 'vue-router'

// Pages
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: checkLogin
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
