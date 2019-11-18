<template>
  <div class="posts">
    <h1>Registro usuarios</h1>
      <div class="form">
        <div>
          <input type="text" name="nombre" placeholder="Ingrese nombre" v-model="nombre">
        </div>
        <div>
          <input type="email" name="email" placeholder="Ingrese email" v-model="email">
        </div>
        <div>
          <input type="password" name="pass" placeholder="Ingrese contraseña" v-model="pass">
        </div>
        <div>
          <button class="app_post_btn" @click="addUsuario">Registrarme</button>
        </div>
      </div>
  </div>
</template>

<script>
import UsuarioService from '@/services/UsuarioServices'
export default {
  name: 'AgregarUsuario',
  data () {
    return {
      nombre: '',
      email: '',
      pass: ''
    }
  },
  methods: {
    async addUsuario () {
      await FavoritosService.addUsuario({
        nombre: this.nombre,
        email: this.email,
        pass: this.pass
      })
      this.$router.push({ name: 'Registro-Usuarios' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>