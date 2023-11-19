import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import PruebaComponent from './components/PruebaComponent.vue';

const myRoutes = [
    {
        path:"/", component: HomeComponent
    },
    {
        path:"/prueba", component: PruebaComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;