import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // Componente Parameter
        // Primer bloque de parametros
        totalParametros:0
    },
    mutations: {
        addDesserts: (state, value) => state.desserts.push(value),
        editDesserts: (state, position, value) => this.$set(state.desserts, position, value),
        editParams: (state, value) => state.parametros = value,
        valorTotalParametros: (state, value) => state.totalParametros = value,
    },
    actions: {
    },
    modules: {
    }
})
