<template>
  <div>
    <h1>Numeros</h1>
    <p>Valor: {{ numero }}</p>
    <a href="#" @click.prevent="gerarNumero()">Clique aqui para gerar um Número!</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Numeros',

  computed:{
    ...mapState(['numero'])
  },
  methods:{
    gerarNumero(){
      this.$store.dispatch('geraNumero', Math.random())
    }
  }
}
</script>

<style lang="scss" scoped>

</style>