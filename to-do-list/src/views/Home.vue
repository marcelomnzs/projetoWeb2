<template>
  <div>
    <h1 class="mt-9 text-center font-bold text-4xl">Suas Tasks</h1>
    <div class="grid justify-items-center mt-8">
    <form>
      <label>New Task:</label>
      <input class="ml-2 border border-gray-400" type="text" v-model="newTask"/>
      <button class="btn-azul-3D" @click.prevent = addTask()>Create New Task</button>
    </form>
    </div>
      
      <TaskForm v-for="(task, index) of tasks" :key="task" :task="task" :index="index" class="" /> 
    
  </div>
  
</template>

<script>
import TaskForm from '@/components/TaskForm.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    TaskForm
  },

  data(){
    return{
      newTask : ''
    }
  },

  computed:{
    ...mapState(['tasks'])
  },

  methods:{
      addTask(){
        if(this.newTask == ''){
          return
        }
        this.$store.dispatch('addTask' , this.newTask)
        this.newTask = ''
      }
    }
}
</script>
