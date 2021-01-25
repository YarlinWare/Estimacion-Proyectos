<template>
    <div>
        <div class="grey lighten-5 mb-6" >
            <div class="container ">
                <div class="row ">
                    <div class="form-group col-sm-3 col-6">
                        <label for="Baja">Baja</label>
                        <input type="number"
                            v-model="parametros.baja"
                            class="form-control" id="Baja"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="Media">Media</label>
                        <input type="number"
                            v-model="parametros.media"
                            class="form-control" id="Media"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="Alta">Alta</label>
                        <input type="number"
                            v-model="parametros.alta"
                            class="form-control" id="Alta"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="muyAlta">Muy Alta</label>
                        <input type="number"
                            v-model="parametros.muyAlta"
                            class="form-control" id="muyAlta"
                            />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-sm-5 col-6">
                        <label for="factorNomina">Factor nomina</label>
                        <input type="number" step="0.01"
                            v-model="parametros.factorNomina"
                            class="form-control" id="factorNomina"
                            />
                    </div>
                    <div class="form-group col-sm-5 col-6">
                        <label for="totalHorasTarea">Total horas tarea</label>
                        <input type="number"
                            v-model="parametros.totalHorasTarea"
                            label="Total horas tarea"
                            class="form-control" id="totalHorasTarea"
                            />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group  col-sm-5 col-6">
                        <label for="horasDiariasXDesarrollador">Horas diarias por desarrollador</label>
                        <input type="number"
                            v-model="parametros.horasDiariasXDesarrollador"
                            label="Horas diarias por desarrollador"
                            class="form-control" id="horasDiariasXDesarrollador"
                            />
                    </div>
                    <div class="form-group  col-sm-5 col-6">
                        <label for="diasHabilesXMes">Días hábiles por mes</label>
                        <input type="number"
                            v-model="parametros.diasHabilesXMes"
                            class="form-control" id="diasHabilesXMes"
                            />
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="form-group col-sm-4 col-6">
                        <button type="button"
                                class="btn btn-success"
                                @click="guardarDatos()"
                        >
                            Guardar parámetros
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data: () => ({
        alignments: [
            'start',
            'center',
            'end',
        ],
        parametros:{
            baja:null,
            media:null,
            alta:null,
            muyAlta:null,

            factorNomina:null,
            totalHorasTarea:null,

            horasDiariasXDesarrollador:null,
            diasHabilesXMes:null
        }

    }),
    methods:{
        guardarDatos(){
            // this.parametros = this.$store.state.parametros
            this.$store.commit('editParams',this.parametros)
            this.parametros = this.$store.state.parametros
        },
    },
    created(){
        this.parametros = this.$store.state.parametros
    }
}
</script>