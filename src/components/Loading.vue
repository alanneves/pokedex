<template>
  <div class="loading">
    <fingerprint-spinner :animation-duration="1500" :size="100" color="#df1818" />
  </div>
</template>

<script>
import { FingerprintSpinner } from 'epic-spinners';

export default {
  components: {
    FingerprintSpinner,
  },
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;
}
</style>
