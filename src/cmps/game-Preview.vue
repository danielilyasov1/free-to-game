<template>
  <section class="game-preview">
    <RouterLink :to="`/game/${game.id}`"
      title="Details">
      <h2>{{game.title}}</h2>
      <!-- <img :src="`{{game.thumbnail}}`"/> -->
      <h3>{{game.short_description}}</h3>
      <h3>{{game.release_date}}</h3>
    </RouterLink>
  </section>
</template>

<script>
  export default {
    name: 'GamePreview',
    props: {
      game: {
        type: Object,
        }
      },
    components: {},
    data() {
      return {};
    },
    created() {},
    methods: {},
    computed: {},
    unmounted() {},
  };
</script>