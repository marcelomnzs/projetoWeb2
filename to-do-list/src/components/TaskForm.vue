<template>
  <div>
    {{ task }}
    <button @click="finishTask">Done</button>
  </div>
</template>

<script>
export default {
  name: "TaskForm", 

  data(){
    return{
      editar: false
    }
  },

  props: {
    task: String,
    index: Number,
  },

  methods:{
     finishTask(){
      this.$store.dispatch('deleteTask', this.index)
    },
  }
};
</script>

<style sccs>
    
    
</style>