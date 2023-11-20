import {createRouter, createWebHistory} from 'vue-router';
import CubosComponent from './components/CubosComponent.vue';
import CubosMarca from './components/CubosMarca.vue';
import CuboDetalles from './components/CuboDetalles.vue';
import LoginComponent from './components/LoginComponent.vue';
import NuevoUsuario from './components/NuevoUsuario.vue';
import PerfilComponent from './components/PerfilComponent.vue';
import ComprasUser from './components/ComprasUser.vue';
import NuevaCompra from './components/NuevaCompra.vue';

const myRoutes = [
    {
        path:"/", component: CubosComponent
    },
    {
        path:"/cubosmarca/:marca", component: CubosMarca
    },
    {
        path:"/detalles/:idcubo", component: CuboDetalles
    },
    {
        path:"/login", component: LoginComponent
    },
    {
        path:"/nuevousuario", component: NuevoUsuario
    },
    {
        path:"/perfil", component: PerfilComponent
    },
    {
        path:"/compras", component: ComprasUser
    },
    {
        path:"/nuevacompra", component: NuevaCompra
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;