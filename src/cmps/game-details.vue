<template>
    <section v-if="toy" class="">
      <h3>Toy Details</h3>
      <p>ID: {{ toy._id }}</p>
      <p>Name: {{ toy.name }}</p>
      <p>Price: {{ toy.price }}</p>
      <ul>
        <li
          v-for="(review, idx) in toy.reviews"
          :key="idx + Math.ceil(Math.random() * 100)"
        >
          {{ review }}
        </li>
      </ul>
    </section>
    <div v-else class="loading"></div>
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
  
  