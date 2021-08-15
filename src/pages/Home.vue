<template>
  <SearchBar />
</template>

<script>
import PokemonService from '../services/PokemonService';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',

  components: {
    SearchBar,
  },

  data() {
    return {
      state: {
        searchFilter: '',
        pokemon: {},
      },
    };
  },

  async created() {
    await this.getAllPokemon();
  },

  methods: {
    // TODO handle error
    async getAllPokemon() {
      try {
        const pokemon = await PokemonService.all();
        this.state.pokemon = pokemon;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>
