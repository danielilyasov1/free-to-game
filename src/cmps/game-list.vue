<template>
    <section class="game-list">
        <ul class="clean-list">
            <li v-for="game in games" :key="game._id">
                <GamePreview sign="$" :game="game" />

            </li>
        </ul>
    </section>
</template>
  
<script>
import GamePreview from './Game-Preview.vue';

export default {
    name: 'GameList',
    props: {
        games: Array,
    },
    components: {
        GamePreview,
    },
    data() {
        return {};
    },
    created() { },
    methods: {
    },
    computed: {},
    unmounted() { },
};
</script>
  