<template>
    <div class="container">
        <v-layout row wrap justify-space-around>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="Baja">Baja</label>
                    <input type="number"
                        v-model="parametros.baja"
                        class="form-control" id="Baja"
                        />
                </div>
            </v-flex>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="Media">Media</label>
                    <input type="number"
                        v-model="parametros.media"
                        class="form-control" id="Media"
                        />
                </div>
            </v-flex>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="Alta">Alta</label>
                    <input type="number"
                        v-model="parametros.alta"
                        class="form-control" id="Alta"
                        />
                </div>
            </v-flex>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="muyAlta">Muy Alta</label>
                    <input type="number"
                        v-model="parametros.muyAlta"
                        class="form-control" id="muyAlta"
                        />
                </div>
            </v-flex>
        </v-layout>
        <!--  -->
        <v-layout row wrap justify-space-around>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="factorNomina">Factor nomina</label>
                    <input type="number" step="0.01"
                        v-model="parametros.factorNomina"
                        class="form-control" id="factorNomina"
                        />
                </div>
            </v-flex>
            <v-flex xs5 md5>
                <div class="form-group ">
                    <label for="totalHorasTarea">Total horas tarea</label>
                    <input type="number"
                        v-model="parametros.totalHorasTarea"
                        label="Total horas tarea"
                        class="form-control" id="totalHorasTarea"
                        />
                </div>
            </v-flex>
        </v-layout>
        <!--  -->
        <v-layout row wrap justify-space-around>
            <v-flex xs5 md5>
                <div class="form-group  ">
                    <label for="horasDiariasXDesarrollador">Horas diarias por desarrollador</label>
                    <input type="number"
                        v-model="parametros.horasDiariasXDesarrollador"
                        label="Horas diarias por desarrollador"
                        class="form-control" id="horasDiariasXDesarrollador"
                        />
                </div>
            </v-flex>
            <v-flex xs5 md5>
                <div class="form-group  ">
                    <label for="diasHabilesXMes">Días hábiles por mes</label>
                    <input type="number"
                        v-model="parametros.diasHabilesXMes"
                        class="form-control" id="diasHabilesXMes"
                        />
                </div>
            </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around>
            <v-flex xs11 md5>
                <v-btn block dark color="#28a745" @click="guardarDatos()">Guardar parámetros</v-btn>
            </v-flex>
        </v-layout>
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
        },

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
<style lang="scss" scoped>
    .form-control, label{
        width: 100%;
    }
</style>