<template>
  <div class="search-container">
    <div class="search">
      <font-awesome-icon
        :icon="['fas', 'search']"
        class="search-icon"
      />
      <b-input
        v-model="filter"
        type="text"
        class="input"
        placeholder="Enter the name of the Pokémon"
        autocomplete="off"
        @keypress.enter="search"
      />
    </div>
    <b-button
      @click="search"
      class="search-button"
    >Search</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      filter: '',
    };
  },

  methods: {
    ...mapActions(['searchPokemons', 'searchPokemonsByName']),

    search() {
      if (this.filter) this.searchPokemonsByName(this.filter.toLowerCase());
      else this.searchPokemons();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-container {
  display: flex;

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    padding-left: 20px;

    .search-icon {
      color: #000;
      font-size: 20px;
    }
  }

  .search-button {
    background: white;
    color: black;
    border: none;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    width: 95px;
  }
}

.input {
  border: none;
  padding: 28px;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
}

@media (max-width: 760px) {
  .search-container {
    flex-direction: column;
    width: 100%;

    .search {
      margin-bottom: 20px;
    }
  }
}
</style>
