import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Search from '../pages/Search/Search'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/register",
        component: Register,
        meta: {
            isHiedFooter: true
        }
    },
    {
        name: 'search',
        path: "/search/:keyword",
        component: Search
    },
    {
        path: "/login",
        component: Login,
        meta: {
            isHiedFooter: true
        }
    },
]

export default new VueRouter({
    routes,
    mode: 'history'
})