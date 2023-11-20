<template>
    <div class="container">
        <h1>Comentarios</h1>
        <br/>
        <table v-if="comentarios.length > 0" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Fecha Comentario</th>
                    <th>Comentario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in comentarios" :key="c.idComentario">
                    <td>{{c.fechaComentario}}</td>
                    <td>{{c.comentario}}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <p class="text-danger">Sin comentarios....</p>
        </div>
        <br/>
        <router-link class="btn btn-danger" :to="'/'">Volver</router-link> 
        <!-- `/cubosmarca/${cubo.marca}` -->
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    export default{
        name:"CuboDetalles",
        data(){
            return{
                comentarios:[],
                cubo:{}
            }
        },
        mounted(){
            let idCubo = this.$route.params.idcubo;
            service.getComentariosCuboByIdCubo(idCubo).then(result=>{
                this.comentarios = result;
            });
            service.findCuboById(idCubo).then(result=>{
                this.cubo = result;
            })
        }
    }
</script>

<style>

</style>