<template>
  <div>
    <h3 class="text-custom-secondary">CITIES:</h3>
    <hr />

    <b-badge
      primary
      v-for="encounter in encountersNames"
      :key="encounter"
      variant="primary"
      class="mr-2 mb-3 p-3"
    >
      {{ encounter }}
    </b-badge>
  </div>
</template>

<script>
export default {
  props: {
    encounters: { type: Array, default: () => [] },
  },

  computed: {
    encountersNames() {
      return this.encounters
        ? this.encounters.map((encounter) => encounter.location_area.name)
        : [];
    },
  },
};
</script>

<style lang="scss">
.badge {
  font-size: 16px !important;
}
</style>
