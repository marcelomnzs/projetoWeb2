<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Numeros/>
    =============
    <Soma/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Numeros from '@/components/Numeros.vue'
import Soma from '@/components/Soma.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Numeros, 
    Soma
  }
}
</script>
