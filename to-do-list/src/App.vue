<template>
  <div id="nav" class="bg-blue-600 p-3 text-white">
    <h3 class="pl-5">To-do-List</h3>
    <div class="relative">
      <div class="absolute bottom-px right-0 pr-5 ">
        <router-link to="/" class="p-1">Tasks Ativas ({{tasks.length}})</router-link> |
        <router-link to="/tasksConcluidas" class="p-1">Tasks Concluidas</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['tasks'])
  }
}
</script>

<style lang="scss">
</style>
