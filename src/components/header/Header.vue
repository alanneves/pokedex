<template>
  <header class="header">
    <div style="width: 100%; position: relative">
      <div class="header-title-container">
        <h1 class="header-title" @click="searchPokemons()">Pokedex</h1>
      </div>
      <Search class="search" />
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import Search from './Search.vue';

export default {
  components: {
    Search,
  },
  methods: mapActions(['searchPokemons']),
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  background: $primary;
  padding: 40px 100px;

  &-title-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &-title {
    color: #fff;
    font-size: 50px;
    margin-bottom: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .search {
    width: 100%;
    position: absolute;
    bottom: -65px;
  }
}

@media (max-width: 760px) {
  .header {
    padding: 20px 50px;
    margin-bottom: 120px;

    &-title-container {
      flex-direction: column;
    }

    &-title {
      font-size: 40px;
      text-align: center;
    }
  }

  .search {
    bottom: -150px;
  }
}
</style>
