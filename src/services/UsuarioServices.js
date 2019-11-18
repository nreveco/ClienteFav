import Api from '@/services/Api'

export default {
  fetchUsuario() {
    return Api().get('Usuario')
  },
  addUsuario (params) {
    console.log(params)
    return Api().post('postUsuario', params)
  }
}