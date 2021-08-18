<template>
  <div class="pokemon-view">
    <CloseButton />
    <img class="pokemon-image" :src="pokemon ? pokemon.image : null" />

    <b-container v-if="pokemon" fluid class="pokemon-view-details">
      <h1 class="mt-4">{{ pokemon.name }}</h1>
      <hr class="mb-5" />
      <PokemonGames
          :games="pokemon.games"
          class="mb-5"
        />

      <PokemonEncounters
        :encounters="pokemon.encounters"
        class="mb-5"
      />
    </b-container>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CloseButton from '@/components/CloseButton.vue';
import PokemonEncounters from '@/components/pokemon/PokemonEncounters.vue';
import PokemonGames from '@/components/pokemon/PokemonGames.vue';

export default {
  components: {
    CloseButton,
    PokemonGames,
    PokemonEncounters,
  },
  computed: {
    ...mapGetters(['getPokemonByName']),
    name() {
      return this.$route.params.name;
    },

    pokemon() {
      return this.getPokemonByName(this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  background: $secondary;
  min-height: 100%;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  overflow: auto;

  .pokemon-view-details {
    background: #fff;
    width: 90%;
    border-radius: 20px;
    margin-top: -60px;
    padding: 30px;

    h1 {
      color: $secondary;
      text-align: center;
    }
  }
}

.pokemon-image {
  width: 200px;
  height: 200px;
  z-index: 99;
}
</style>
