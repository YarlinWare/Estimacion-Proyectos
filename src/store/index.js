import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // Componente Parameter
        // Primer bloque de parametros
        desserts: [
            {
                actividad: 'Administración',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
            {
                actividad: 'Diseño',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
            {
                actividad: 'Desarrollo',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
            {
                actividad: 'Pruebas',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
            {
                actividad: 'Instalación',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
            {
                actividad: 'Documentación',
                horasTarea: 2,
                costoMesIngeniero: 6000000.00,
                valorMesIngeniero: 15000000.00,
                valorTarea: 187500.00,
                valorHoraIngeniero: 93750.00,
            },
        ],
        parametros:{
            baja:1,
            media:2,
            alta:4,
            muyAlta:6,
            // Segundo bloque
            factorNomina:2.5,
            totalHorasTarea:9,
            // Tercer bloque
            horasDiariasXDesarrollador:6,
            diasHabilesXMes:20,
        }
    },
    mutations: {
        addDesserts: (state, value) => state.desserts.push(value),
        editDesserts: (state, position, value) => this.$set(state.desserts, position, value),
        editParams: (state, value) => state.parametros = value,
    },
    actions: {
    },
    modules: {
    }
})
