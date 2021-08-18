<template>
  <div>
    <Header />

    <b-container fluid class="home mt-5 pt-5">
      <div class="d-flex flex-wrap justify-content-center">
        <PokemonCard
          :name="pokemon.name"
          :image-url="pokemon.image"
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          @click.native="expand(pokemon.name)"
        />
      </div>

      <div v-show="!loading">
        <div v-show="totalOfPokemons > 0">
          <Pagination class="mt-4 mb-5" @updatePage="updatePage" />
        </div>
        <div class="text-center" v-if="totalOfPokemons == 0">Pokemon Not Found...</div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PokemonCard from '@/components/pokemonCard/PokemonCard.vue';
import Pagination from '@/components/Pagination.vue';
import Header from '@/components/header/Header.vue';

export default {
  components: {
    PokemonCard,
    Header,
    Pagination,
  },
  computed: {
    ...mapState(['loading', 'pokemons', 'totalOfPokemons']),
  },
  methods: {
    ...mapActions(['searchPokemons']),
    updatePage(page) {
      this.searchPokemons(page);
    },
    expand(name) {
      this.$router.push({
        name: 'Pokemon',
        params: {
          name,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
