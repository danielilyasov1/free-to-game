<template>
  <div>
    <app-header />
    <RouterView />
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  import AppHeader from './cmps/AppHeader.vue';

  export default {
    components: {
      AppHeader,
    },
    created() {
      // this.$store.dispatch({type: 'loadGames'});
    },
  };
</script>

<style></style>
  