<template>
    <div class="container">
        <h1>Nueva Compra</h1>
        <br/>
        <form v-on:submit.prevent="insertarCompra()">
            <label>Seleccione un cubo para comprar</label>
            <select class="form-control" v-model="selectCubos">
                <option v-for="c in cubos" :key="c.idCubo" :value="c.idCubo">
                    {{c.nombre}}
                </option>
            </select>
            <br/>
            <button class="btn btn-outline-primary">Comprar Cubo</button>
        </form>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    export default{
        name:"NuevaCompra",
        data(){
            return{
                cubos:[],
                selectCubos: 0
            }
        },
        mounted(){
            service.getCubos().then(result=>{
                this.cubos = result;
            })
        },
        methods:{
            insertarCompra(){
                // console.log(this.selectCubos);
                let idCubo = this.selectCubos;
                let token = service.getToken();
                console.log(idCubo);
                console.log(token);
                service.nuevaCompra(token,idCubo).then(result=>{
                    console.log(result);
                })
            }
        }
    }
</script>