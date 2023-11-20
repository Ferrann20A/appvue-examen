<template>
    <div class="container">
        <h1>Perfil</h1>
        <br/>
        <div class="datos-perfil">
            <label>Id Usuario</label>
            <input type="number" disabled v-model="usuario.idUsuario" class="form-control"/>
            <label>Nombre</label>
            <input type="text" v-model="usuario.nombre" class="form-control"/>
            <label>Email</label>
            <input type="text" v-model="usuario.email" class="form-control"/>
        </div>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    export default{
        name:"PerfilComponent",
        data(){
            return{
                usuario:{}
            }
        },
        mounted(){
            let token = service.getToken();
            service.getPerfilUsuario(token).then(result=>{
                this.usuario = result;
            })
        }
    }
</script>