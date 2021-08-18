<template>
  <div id="app">
    <transition name="fade">
      <Loading v-if="loading" />
    </transition>

    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Loading,
  },
  computed: mapState(['loading']),
  methods: mapActions(['searchPokemons']),
  created() {
    this.searchPokemons();
  },
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
