<template lang="pug">
  .app
    TheHeader
    router-view

</template>

<script>
import TheHeader from './components/Common/Header.vue'

export default {
  components: {
    TheHeader
  },
  mounted () {
    this.$router.push('/basket')
  }
}
</script>

<style src="./assets/sass/main.scss" lang="scss">
.app {
  display: flex;
}
</style>
