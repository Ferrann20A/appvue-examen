<template>
    <div class="container">
        <h1>Compras del User</h1>
        <br/>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id Cubo</th>
                    <th>Id Pedido</th>
                    <th>Id Usuario</th>
                    <th>Fecha Pedido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in compras" :key="c">
                    <td>{{c.idCubo}}</td>
                    <td>{{c.idPedido}}</td>
                    <td>{{c.idUsuario}}</td>
                    <td>{{c.fechaPedido}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    export default{
        name:"ComprasUser",
        data(){
            return{
                compras:[]
            }
        },
        mounted(){
            let token = service.getToken();
            service.getComprasUser(token).then(result=>{
                this.compras = result;
            })
        }
    }
</script>