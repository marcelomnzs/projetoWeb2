<template>
  <div>
    <h1>Soma de Números</h1>
    <h2>Numero atual: </h2>
    <p>{{ numero }} </p>
    <a href="#" @click.prevent='soma()'></a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
      ...mapState(['numero'])
  }
}
</script>

<style lang="scss" scoped>

</style>