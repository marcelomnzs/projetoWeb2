import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) ?? []
  },
  mutations: {
    storeTask(state , task){
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    eraseTask(state, index) {
      state.tasks.splice(index,1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }

  },
  actions: {
    async addTask({ commit } , task){
      commit('storeTask' , task)
    },

    async deleteTask({ commit } , index){
      commit('eraseTask' , index)
    }
  },
  modules: {
  }
})
