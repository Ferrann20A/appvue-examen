<template>
  <div class="container">
    <h1>Cubos</h1>
    <br />
    <div class="d-flex flex-wrap">
      <div class="card m-3" style="width: 18rem" v-for="c in cubos" :key="c.idCubo">
            <img :src="c.imagen" class="card-img-top" alt="img_cubo" />
            <div class="card-body">
                <h5 class="card-title">{{c.nombre}}</h5>
                <p class="card-text">Modelo: {{c.modelo}}</p>
                <p class="card-text">Marca: {{c.marca}}</p>
                <p class="card-text">{{c.precio}}€</p>
                <p class="card-text">Valoración: {{c.valoracion}}</p>
                <router-link class="btn btn-info" :to="`/detalles/${c.idCubo}`">Comentarios</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "CubosComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
};
</script>