<template>
  <div>
    <input type="text" v-model="state.searchFilter" />
    {{ state.searchFilter }}
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  data() {
    return {
      state: {
        searchFilter: '',
      },
    };
  },
};
</script>

<style>
</style>
