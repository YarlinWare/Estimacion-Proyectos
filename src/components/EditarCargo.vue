<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-success"
                data-toggle="modal"
                data-target="#editarModal"
                @click="cargarValores()"
        ><i class="fa fa-pencil"></i></button>

        <!-- Modal -->
        <div v-if="modal" class="modal fade" id="editarModal" tabindex="-1" aria-labelledby="editarModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editarModalLabel">Editar campo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-6">
                            <label for="actividad">Actividad</label>
                            <input type="text"
                                v-model="objeto.actividad"
                                class="form-control" id="actividad"
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for="horasTarea">Horas Tarea</label>
                            <input type="number"
                                v-model="objeto.horasTarea"
                                class="form-control" id="horasTarea"
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for="costoMesIngeniero">Costo mes ingeniero</label>
                            <input type="number"
                                v-model="objeto.costoMesIngeniero"
                                class="form-control" id="costoMesIngeniero"
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for="valorMesIngeniero">Valor mes ingeniero</label>
                            <input type="number"
                                v-model="objeto.valorMesIngeniero"
                                class="form-control" id="valorMesIngeniero"
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for="valorTarea">Valor Tarea</label>
                            <input type="number"
                                v-model="objeto.valorTarea"
                                class="form-control" id="valorTarea"
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for="valorHoraIngeniero">Valor hora ingeniero</label>
                            <input type="number"
                                v-model="objeto.valorHoraIngeniero"
                                class="form-control" id="valorHoraIngeniero"
                                />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="modal=false">Cancelar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="guardarCambios()">Guardar cambios</button>
                </div>
                </div>
            </div>
        </div>
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
            this.objeto = this.elemento
            this.modal=true
        },
        guardarCambios(){
            this.$emit('editar', this.objeto)
            this.modal=false
        }
    },
    mounted(){
        // if (this.elemento.length != 0) {
        //     this.objeto = this.elemento
        // }
    }
}
</script>