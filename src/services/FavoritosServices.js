import Api from '@/services/Api'

export default {
  fetchFavoritos() {
    return Api().get('Favoritos')
  },
  addFavoritos (params) {
    console.log(params)
    return Api().post('postFavorito', params)
  }
}