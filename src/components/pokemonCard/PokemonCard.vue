<template>
  <b-card class="pokemon">

    <span class="pokemon-name">{{ name }}</span>

    <div class="pokemon-image">
      <img :src="imageUrl" />
    </div>
  </b-card>
</template>

<script>

export default {
  components: {
  },
  props: {
    name: String,
    imageUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.pokemon {
  margin: 50px;
  position: relative;
  padding: 25px;
  border-radius: 30px;
  background: $secondary;
  border: none;
  color: #fff;
  width: 320px;
  cursor: pointer;
  transition: all 0.4s;

  &:hover,
  &:active {
    opacity: 0.8;
  }

  .pokemon-name {
    font-family: 'Rammetto One', cursive;
    font-weight: normal;
    font-size: 18px;
  }
}

.pokemon-image {
  position: relative;
  height: 100%;

  img {
    position: absolute;
    right: -80px;
    bottom: -20px;
    width: 150px;
    height: 150px;
  }
}
</style>
