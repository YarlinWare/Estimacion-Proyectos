<template>
    <div>
        <v-layout row wrap justify-space-around>
            <v-flex xs11 sm11 md5>
                <div class="form-group ">
                        <label for="actividad">Actividad</label>
                        <input type="text"
                            v-model="actividad"
                            class="form-control" id="actividad"
                            />
                </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="horasTarea">Horas Tarea</label>
                        <input type="number"
                            v-model="horasTarea"
                            class="form-control" id="horasTarea"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="costoMesIngeniero">Costo mes ingeniero</label>
                        <input type="number"
                            v-model="costoMesIngeniero"
                            class="form-control" id="costoMesIngeniero"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorMesIngeniero">Valor mes ingeniero</label>
                        <input type="number"
                            v-model="valorMesIngeniero"
                            class="form-control" id="valorMesIngeniero"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorTarea">Valor Tarea</label>
                        <input type="number"
                            v-model="valorTarea"
                            class="form-control" id="valorTarea"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorHoraIngeniero">Valor hora ingeniero</label>
                        <input type="number"
                            v-model="valorHoraIngeniero"
                            class="form-control" id="valorHoraIngeniero"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                <button type="button" class="btn btn-primary" @click="guardarCambios(),$emit('click', false)">Guardar</button>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    props:{
        elemento:{
            type:Object,
        }
    },
    data(){
        return{
            objeto:{},
            actividad:'',
            horasTarea: 1,
            costoMesIngeniero:0,
            valorMesIngeniero:0,
            valorTarea:0,
            valorHoraIngeniero:0,
        }
    },
    methods:{
        guardarCambios(){
            this.objeto = {
                    actividad: this.actividad,
                    horasTarea: Number(this.horasTarea),
                    costoMesIngeniero: Number(this.costoMesIngeniero),
                    valorMesIngeniero: Number(this.valorMesIngeniero),
                    valorTarea: Number(this.valorTarea),
                    valorHoraIngeniero: Number(this.valorHoraIngeniero),
            }
            // alert(JSON.stringify(this.objeto))
            this.$emit('agregar', this.objeto)
        }
    },
    created(){
        // if (this.elemento.length != 0) {
        //     this.objeto = this.elemento
        // }
    }
}
</script>
<style lang="scss" scoped>
    .form-control, label{
        width: 100%;
    }
</style>