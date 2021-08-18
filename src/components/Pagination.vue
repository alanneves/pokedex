<template>
  <div class="pagination-container">
    <b-pagination
      class="pagination"
      size="md"
      :total-rows="totalOfPokemons"
      v-model="currentPage"
      per-page="12"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['totalOfPokemons', 'currentPokemonsPage']),

    currentPage: {
      get() {
        return this.currentPokemonsPage;
      },
      set(val) {
        this.$emit('updatePage', val);
      },
    },
  },
};
</script>

<style lang="scss">
.pagination-container {
  display: flex;
  justify-content: center;

  .pagination {
    .page-item {
      box-shadow: 2px 2px 2px #cdcdcd;
    }

    .page-link {
      padding: 20px;
      color: $primary;
      border: none;
      transition: all 0.2s;
    }

    .page-item.active .page-link {
      color: white;
      background: $primary;
      border-color: $primary;
    }
  }
}
</style>
