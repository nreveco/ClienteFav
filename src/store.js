import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:0,
    title:'',
    name:'',
    species:'',
    type:'',
    image:'',
    status:'',
    user_id:0
  },
  mutations: {
    setId (state, id,title,name,species,type,image,status,user_id) {
      state.id = id
    },
    setTitle (state, title) {
      state.title = title
    },
    setName (state, name) {
      state.name = name
    },
    setSpecies (state, species) {
      state.species = species
    },
    setType (state, type) {
      state.type = type
    },
    setImage (state, image) {
      state.image = image
    },
    setStatus (state, status) {
      state.status = status
    },
    setUser (state, user_id) {
      state.user_id = user_id
    },
  },
  actions: {
    ActId (context, id) {
      context.commit('setId',id)
    },
    ActTitle (context, title) {
      context.commit('setTitle',title)
    },
    ActName (context, name) {
      context.commit('setName',name)
    },
    ActSpecies (context, species) {
      context.commit('setSpecies',species)
    },
    ActType (context, type) {
      context.commit('setType',type)
    },
    ActImage (context, image) {
      context.commit('setImage',image)
    },
    ActStatus (context, status) {
      context.commit('setStatus',status)
    },
    ActUser (context, user_id) {
      context.commit('setUser',user_id)
    },
  },
  getters: {
    
  }
})
