<template>
  <router-link to="/" class="p-1">Tasks Ativas ({{tasks.length}})</router-link>
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
