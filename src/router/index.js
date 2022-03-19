import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login';
import Registration from '../views/Registration';
import PageSettings from '../views/PageSettings.vue'
import Applications from '../views/Applications.vue'
import Home from '../views/Home.vue'
 
Vue.use(VueRouter);
 
const routes = [
    {
        path: '/',
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
    {
        path: '/page_settings',
        name: 'page_settings',
        component: PageSettings,
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/applications',
        name: 'applications',
        component: Applications,
        meta: {
            requireAuth: true,
        }
    }
];
 
const router = new VueRouter({
    mode: 'history',
    routes
});
 
export default router;