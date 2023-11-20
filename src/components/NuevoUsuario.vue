<template>
    <div class="container">
        <h1>Nuevo Usuario</h1>
        <br/>
        <form v-on:submit.prevent="insertarUsuario()">
            <label>Id Usuario</label>
            <input type="number" class="form-control" v-model="usuario.idUsuario"/>
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="usuario.nombre"/>
            <label>Email</label>
            <input type="text" class="form-control" v-model="usuario.email"/>
            <label>Contraseña</label>
            <input type="password" class="form-control" v-model="usuario.pass"/>
            <br/>
            <button class="btn btn-primary">Registrarse</button>
        </form>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    export default{
        name:"NuevoUsuario",
        data(){
            return{
                usuario:{
                    idUsuario:0,
                    nombre:"",
                    email:"",
                    pass:""
                }
            }
        },
        methods:{
            insertarUsuario(){
                service.nuevoUsuario(this.usuario).then(result=>{
                    console.log(result);
                    console.log(this.usuario);
                })
            }
        }
    }
</script>

<style>

</style>