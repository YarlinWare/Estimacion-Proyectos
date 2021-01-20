<template>
    <div>
        <div class="grey lighten-5 mb-6" >
            <div class="container">
                <div class="row">
                    <div class="form-group col-sm-3 col-6">
                        <label for="Baja">Baja</label>
                        <input type="text"
                            v-model="baja"
                            class="form-control" id="Baja"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="Media">Media</label>
                        <input type="text"
                            v-model="media"
                            class="form-control" id="Media"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="Alta">Alta</label>
                        <input type="text"
                            v-model="alta"
                            class="form-control" id="Alta"
                            />
                    </div>
                    <div class="form-group col-sm-3 col-6">
                        <label for="muyAlta">Muy Alta</label>
                        <input type="text"
                            v-model="muyAlta"
                            class="form-control" id="muyAlta"
                            />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-sm-4 col-6">
                        <label for="factorNomina">Factor nomina</label>
                        <input type="text"
                            v-model="factorNomina"
                            class="form-control" id="factorNomina"
                            />
                    </div>
                    <div class="form-group col-sm-4 col-6">
                        <label for="totalHorasTarea">Total horas tarea</label>
                        <input type="text"
                            v-model="totalHorasTarea"
                            label="Total horas tarea"
                            class="form-control" id="totalHorasTarea"
                            />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group  col-sm-4 col-6">
                        <label for="horasDiariasXDesarrollador">Horas diarias por desarrollador</label>
                        <input type="text"
                            v-model="horasDiariasXDesarrollador"
                            label="Horas diarias por desarrollador"
                            class="form-control" id="horasDiariasXDesarrollador"
                            />
                    </div>
                    <div class="form-group  col-sm-4 col-6">
                        <label for="diasHabilesXMes">Días hábiles por mes</label>
                        <input type="text"
                            v-model="diasHabilesXMes"
                            class="form-control" id="diasHabilesXMes"
                            />
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
        baja:null,
        media:null,
        alta:null,
        muyAlta:null,

        factorNomina:null,
        totalHorasTarea:null,

        horasDiariasXDesarrollador:null,
        diasHabilesXMes:null,

    }),
    methods:{
        llenadoBloque1(){
            const { baja, media, alta, muyAlta } = this.$store.state.horaTipoTarea
            this.baja = baja
            this.media = media
            this.alta = alta
            this.muyAlta = muyAlta

            this.factorNomina= this.$store.state.factorNomina
            this.totalHorasTarea= this.$store.state.totalHorasTarea

            this.horasDiariasXDesarrollador= this.$store.state.horasDiariasXDesarrollador
            this.diasHabilesXMes= this.$store.state.diasHabilesXMes
        }
    },
    created(){
        this.llenadoBloque1();
    }
}
</script>