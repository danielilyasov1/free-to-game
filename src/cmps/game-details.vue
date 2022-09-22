<template>
    <section v-if="game" class="">
      <h3>Game Details</h3>
      <p>ID: {{ game._id }}</p>
      <p>Name: {{ game.name }}</p>
      <!-- <p>: {{ game. }}</p> -->
    
    </section>
  </template>
  
  <script>
    import gameService from '../services/game.service.js';
  
    export default {
      components: {},
      data() {
        return {
          game: null,
        };
      },
      async created() {
        const {id} = this.$route.params;
        
      },
      methods: {},
      
    };
  </script>
  
  