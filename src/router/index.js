import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Registration from '../views/Registration';
import Home from '../views/Home.vue'
 
Vue.use(VueRouter);
 
const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home, 
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            guest: true,
        }
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration,
        meta: {
            guest: true,
        }
    },
];
 
const router = new VueRouter({
    mode: 'history',
    routes
});
 
export default router;