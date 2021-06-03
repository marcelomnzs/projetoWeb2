<template>
  <div class="max-w-lg max-h-full max-h-full mx-auto rounded-md bg-white">
    <div class="relative">
      <div class="absolute inset-y-0 right-0 p-6 top-3">
        <h3>Tasks Ativas (<span class="font-bold">{{ tasks.length }}</span>) </h3>
      </div>
    <h1 class="px-6 pt-6 font-black text-3xl">To-do-List</h1>
    </div>

    <div class="mt-20 grid place-items-center">
      <form>
        <div>
          <input class="relative inputEffect" type="text" v-model="newTask" placeholder="Type your task"/>
          <button class="btn-azul" @click.prevent = addTask()>Create New Task</button>
        </div>
      </form>
    </div>

    <div class="taskList">
      <TaskForm v-for="(task, index) of tasks" :key="task" :task="task" :index="index" class="task"/> 
    </div>
    
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
