<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Agregar
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Agregar un nuevo campo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="form-group col-6">
                        <label for="actividad">Actividad</label>
                        <input type="text"
                            v-model="actividad"
                            class="form-control" id="actividad"
                            />
                    </div>
                    <div class="form-group col-6">
                        <label for="horasTarea">Horas Tarea</label>
                        <input type="number"
                            v-model="horasTarea"
                            class="form-control" id="horasTarea"
                            />
                    </div>
                    <div class="form-group col-6">
                        <label for="costoMesIngeniero">Costo mes ingeniero</label>
                        <input type="number"
                            v-model="costoMesIngeniero"
                            class="form-control" id="costoMesIngeniero"
                            />
                    </div>
                    <div class="form-group col-6">
                        <label for="valorMesIngeniero">Valor mes ingeniero</label>
                        <input type="number"
                            v-model="valorMesIngeniero"
                            class="form-control" id="valorMesIngeniero"
                            />
                    </div>
                    <div class="form-group col-6">
                        <label for="valorTarea">Valor Tarea</label>
                        <input type="number"
                            v-model="valorTarea"
                            class="form-control" id="valorTarea"
                            />
                    </div>
                    <div class="form-group col-6">
                        <label for="valorHoraIngeniero">Valor hora ingeniero</label>
                        <input type="number"
                            v-model="valorHoraIngeniero"
                            class="form-control" id="valorHoraIngeniero"
                            />
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="guardarCambios()">Guardar</button>
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
                    actividad: Number(this.actividad),
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
        if (this.elemento.length != 0) {
            this.objeto = this.elemento
        }
    }
}
</script>