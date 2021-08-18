import Vue from 'vue';
import Vuex from 'vuex';

import pokemonService from '../services/pokemon';
import * as types from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    pokemons: [],
    totalOfPokemons: 0,
    currentPokemonsPage: 0,
  },

  getters: {
    getPokemonByName: (state) => (name) => state.pokemons.find((x) => x.name === name),
  },

  mutations: {
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [types.CLEAR_POKEMONS](state) {
      state.pokemons = [];
    },
    [types.SET_POKEMONS](state, payload) {
      state.pokemons = payload;
    },
    [types.SET_TOTAL_OF_POKEMONS](state, payload) {
      state.totalOfPokemons = payload;
    },
    [types.SET_CURRENT_POKEMONS_PAGE](state, payload) {
      state.currentPokemonsPage = payload;
    },
  },

  actions: {
    async searchPokemons({ commit, dispatch }, page) {
      commit(types.SET_LOADING, true);
      commit(types.CLEAR_POKEMONS);

      const pokemonsResponse = await pokemonService.get(page);
      commit(types.SET_TOTAL_OF_POKEMONS, pokemonsResponse.count);
      commit(types.SET_CURRENT_POKEMONS_PAGE, page || 1);

      await dispatch('searchPokemonsDetails', pokemonsResponse.results);

      commit(types.SET_LOADING, false);
    },

    async searchPokemonsDetails({ commit }, pokemons) {
      const pokemonsWithDetails = await Promise.all(pokemons.map(
        (x) => pokemonService.getByName(x.name),
      ));

      const pokemonsEncounters = await Promise.all(pokemons.map(
        (x) => pokemonService.getEncounters(x.name),
      ));

      commit(types.SET_POKEMONS, pokemonsWithDetails.map(
        (x, index) => ({
          name: x.name,
          games: x.game_indices,
          image: x.sprites.other.dream_world.front_default || x.sprites.front_default,
          encounters: pokemonsEncounters[index],
        }),
      ));
    },

    async searchPokemonsByName({ commit, dispatch }, name) {
      commit(types.SET_LOADING, true);
      commit(types.CLEAR_POKEMONS);
      commit(types.SET_CURRENT_POKEMONS_PAGE, 1);

      const pokemons = [];

      try {
        const pokemon = await pokemonService.getByName(name);
        pokemons.push(pokemon);
      } catch (e) {
        // Pokemon not found
      }

      commit(types.SET_TOTAL_OF_POKEMONS, pokemons.length);
      await dispatch('searchPokemonsDetails', pokemons);

      commit(types.SET_LOADING, false);
    },
  },
});
