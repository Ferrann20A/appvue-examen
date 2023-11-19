<template>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NAVBAR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/prueba">Prueba</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">3º link</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">4ºlink</router-link>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li>
                <a class="dropdown-item" href="#">link</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">link</a>
            </li>
            <!-- <li v-for="c in cursos" :key="c">
                <router-link class="dropdown-item" :to="`/cursoalumnos/${c}`">Curso {{c}}</router-link>
            </li> -->
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default{
        name:"MenuComponent"
    }
</script>

<style>

</style>