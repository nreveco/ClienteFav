import Vue from 'vue'
import Router from 'vue-router'
import Personajes from '@/components/Personajes'
import AgregarUsuario from '@/components/AgregarUsuario'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Personajes',
      name: 'Personajes',
      component: Personajes
    },
    {
      path: '/Registro-Usuarios',
      name: 'Registro-usuario',
      component: AgregarUsuario
    },
    
  ]
})
