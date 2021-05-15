import { createStore } from 'vuex'

export default createStore({
  state: {
    numero: 'Gere um número!'
  },
  mutations: {
    setNumero(state, numero){
      state.numero = numero
    }
  },
  actions: {
    async geraNumero({ commit } , numero){
      commit('setNumero' , numero)
    }
  },
  modules: {
  }
})
