import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Componente Parameter
    // Primer bloque de parametros
    horaTipoTarea:{
      baja:1,
      media:2,
      alta:4,
      muyAlta:6,
    },
    // Segundo bloque
    factorNomina:2.5,
    totalHorasTarea:9,
    // Tercer bloque
    horasDiariasXDesarrollador:6,
    diasHabilesXMes:20,
  },
  mutations: {
    // horaTipoTarea: (state, posicion, valor) => state.nextPant[posicion] = valor,
  },
  actions: {
  },
  modules: {
  }
})
