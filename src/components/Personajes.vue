
<template>
  <div>  
<b-container class="bv-example-row">
  <b-row>
    
    <b-col cols="6" md="3" v-for="item of items" v-bind:key="item.name">
      <b-card 
    :title="item.name"
    :img-src="item.image" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2" >
      <b-card-text>
        {{item.name}}
        {{item.species}}
      </b-card-text>
      <b-button href="#" variant="primary" @click="addFavorito(item.id)">Agregar a favoritos</b-button>
    </b-card>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FavoritosService from '@/services/FavoritosServices'
  export default {
    
    methods: {
      ...mapActions([
      'ActId','ActTitle','ActName','ActSpecies','ActImage','ActType','ActUser','ActStatus'
    ]),
      async save(){
        await FavoritosService.addFavoritos({
              id: this.id,
              title: this.title,
              description: this.name,
              image: this.image, 
              name: this.name, 
              species: this.type,
              type:this.type,
              status:this.status,
              user_id:this.user_id
            })
        alert("Se agrego al personaje" + this.name)
      },
      addFavorito(id) {
        this.axios.get('https://rickandmortyapi.com/api/character/'+id)
          .then(response => {
            this.ActId(response.data.id)
            this.ActTitle(response.data.name)
            this.ActName(response.data.name)
            this.ActSpecies(response.data.species)
            this.ActImage(response.data.image)
            this.ActType(response.data.type)
            this.ActStatus(response.data.status)
            this.ActUser(1)
            this.save()
            
          })
          .catch(function (error) {
            console.log(error)
          })

          
          
            
        
       
      }
    },
    mounted(){
        this.axios.get('https://rickandmortyapi.com/api/character/')
          .then(response => {
            response.data.results.map(item => {
            this.items.push({id:item.id, image: item.image, name: item.name, species: item.species,type:item.type,status:item.status })
            });
          })
          .catch(function (error) {
            console.log(error)
          })
    },  
    data() {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'image',
            sortable: true
          },
          {
            key: 'name',
            sortable: false
          },
          {
            key: 'species',
            sortable: true,
          },
          {
            key: 'type',
            sortable: true,
          },
          {
            key: 'status',
            sortable: true,
          }
        ],
        items: []

      }
    },
    computed: {
      ...mapState([
      'id',
      'title',
      'name',
      'species',
      'type',
      'image',
      'status',
      'user_id'
        ])
      }
  }
</script>