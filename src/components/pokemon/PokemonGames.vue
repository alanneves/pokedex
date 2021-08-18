<template>
  <div>
    <h3 class="text-custom-secondary">GAMES:</h3>
    <hr />

    <b-badge primary v-for="game in gamesNames" :key="game" variant="primary" class="mr-2 mb-3 p-3">
      {{ game }}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: {
    games: { type: Array, default: () => [] },
  },

  computed: {
    gamesNames() {
      return this.games ? this.games.map((game) => game.version.name) : [];
    },
  },
};
</script>

<style lang="scss">
.badge {
  font-size: 16px !important;
}
</style>
