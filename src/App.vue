<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <b-navbar-brand href="#">Favoritos Rick and Mort</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/Personajes"><span>Personajes</span></router-link></b-nav-item>
        <b-nav-item disabled>Favoritos</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Acceso usuarios</em>
          </template>
          <b-dropdown-item><b-nav-item><router-link to="/Registro-Usuarios"><span>Registro de usuarios</span></router-link></b-nav-item></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item right href="#">Perfil</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <router-view/>
   <div class="fluid-container footer">
    <p class="text-center">Copyright © 2019, Nicolas Reveco. All Rights Reserved.</p>
  </div>  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app a{
color:#fff;
}
.dropdown a{
color:#000;
}
.fluid-container.footer{
  background: #17A2B8;
  
}
.fluid-container.footer > *:last-child {
    margin-bottom: 0px;
    color: #fff;
}


</style>
