
<template>
  <h1>hi</h1>
  <section class="game-app app-main">
    <div class="main-container container">
      <div class="top">
        <!-- <GameFilter @set-filter="setFilter" /> -->
      </div>
      <GameList v-if="games" :games="games"  />
    </div>
  </section>
</template>

<script>
import GameList from "../cmps/game-List.vue";
import gameService from "../services/game.service.js"

export default {
  components: {
    GameList,
    // GameFilter,
  },
  data() {
    return {
      games:null
    }
  },
  async created() {
      this.games = await gameService.query()
  },
  methods: {
    // setFilter(filterBy) {
    //   // this.filterBy = filterBy;
    //   console.log(filterBy);
    //   const copyFilter = JSON.parse(JSON.stringify(filterBy));
    //   console.log(copyFilter);
    //   this.$store.dispatch({
    //     type: "setFilterAct",
    //     filterBy: copyFilter,
    //   });
    // },
    
  },
  computed: {
    

  },
};
</script>
