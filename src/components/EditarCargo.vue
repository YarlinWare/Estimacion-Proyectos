<template>
    <div>
        <v-layout row wrap justify-space-around>
            <v-flex xs11 sm11 md5>
                <div class="form-group ">
                        <label for="actividad">Actividad</label>
                        <input type="text"
                            v-model="objeto.actividad"
                            class="form-control" id="actividad"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="horasTarea">Horas Tarea</label>
                        <input type="number"
                            v-model="objeto.horasTarea"
                            class="form-control" id="horasTarea"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="costoMesIngeniero">Costo mes ingeniero</label>
                        <input type="number"
                            v-model="objeto.costoMesIngeniero"
                            class="form-control" id="costoMesIngeniero"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorMesIngeniero">Valor mes ingeniero</label>
                        <input type="number"
                            v-model="objeto.valorMesIngeniero"
                            class="form-control" id="valorMesIngeniero"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorTarea">Valor Tarea</label>
                        <input type="number"
                            v-model="objeto.valorTarea"
                            class="form-control" id="valorTarea"
                            />
                    </div>
            </v-flex>
            <v-flex xs11 sm11 md5>
                    <div class="form-group ">
                        <label for="valorHoraIngeniero">Valor hora ingeniero</label>
                        <input type="number"
                            v-model="objeto.valorHoraIngeniero"
                            class="form-control" id="valorHoraIngeniero"
                            />
                    </div>
            </v-flex>
            <hr>
            <!-- <v-flex xs5 sm5 md5>
                <button type="button" class="btn btn-secondary" @click="modal=false">Cancelar</button>
            </v-flex> -->
            <v-flex xs5 sm5 md5>
                <button type="button" class="btn btn-primary" @click="guardarCambios()">
                    Guardar cambios
                </button>
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
            objeto:null,
            modal:false
        }
    },
    methods:{
        cargarValores(){
            // this.objeto = this.elemento
            try {
                this.objeto = this.elemento
            } catch (error) {
                console.log('....')
            }
            // this.modal=true
        },
        guardarCambios(){
            this.$emit('editar', this.objeto)
            // this.modal=false
        }
    },
    mounted(){
        if (this.elemento != null && this.elemento.length != 0) {
            try {
                this.objeto = this.elemento
            } catch (error) {
                console.log('....')
            }
        }
    }
}
</script>