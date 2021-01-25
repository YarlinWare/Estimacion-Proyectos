<template>
    <div class="container">
        <div class="row">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" @click="modalAgregar = true">
                Agregar Cargo
            </button>
            <!-- <agregar-cargo-app @agregar="agregarCargo($event)"/> -->
        </div>
        <div class="row">
            <div class="col-12">
                <table class="default dataTable" v-if="desserts.length != 0">
                <thead>
                    <tr>
                        <th scope="row"
                            class="tableheader"
                            v-for="(header, index) in headers"
                            :key="index">
                            {{header.text}}
                        </th>
                        <th class="tableheader">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(dessert, idx) in desserts"
                        :key="`desserts-${idx}`"
                    >
                        <th v-for="(d, i, j) in dessert"
                            :key="`${d}-${i}`"
                            :class="[{'tableKey': j==0}, 'dateTable-items']"
                        >
                            <span><b v-if="j>1">$</b> {{d}} </span>
                        </th>
                        <th>
                            <div class="dataTable-btn-action">
                                <button class="dataTable-icons btn btn-outline-success"
                                        @click="editarElemento(idx)"
                                        type="button"
                                ><i class="fa fa-pencil"></i></button>

                                <button class="dataTable-icons btn btn-outline-danger"
                                        @click="eliminarElemento(idx)"
                                        type="button"
                                ><i class="fa fa-trash"></i></button>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th class="tableKey dateTable-items">Total</th>
                        <th class="dateTable-items"><span>{{totalTabla[0]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[1]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[2]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[3]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[4]}}</span></th>
                        <th class="dateTable-items"></th>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <modal-app v-model="modalAgregar" :width="'500px'">
            <template slot="modaltitle">
                <h2>Agregar nuevo cargo</h2>
            </template>
            <template slot="modalcontent">
                <agregar-cargo-app @agregar="agregarCargo($event)"/>
            </template>
        </modal-app>

        <modal-app v-model="modalEditar" :width="'500px'">
            <template slot="modaltitle">
                <h2>Editar cargo</h2>
            </template>
            <template slot="modalcontent">
                <editar-cargo-app   v-if="modalEditar"
                                    :elemento="elementoSeleccionado"
                                    @editar="editarCargo($event)"
                />
            </template>
        </modal-app>
    </div>
</template>
<script>
/* eslint-disable */
import Agregar from './AgregarCargo'
import Editar from './EditarCargo'

export default {
    components:{
        'agregar-cargo-app': Agregar,
        'editar-cargo-app':Editar
    },
    data () {
        return {
            nuevoCargo:'',
            headers: [
                {
                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'actividad',
                },
                { text: 'Horas tarea', value: 'horasTarea' },
                { text: 'Costo mes ingeniero', value: 'costoMesIngeniero' },
                { text: 'Valor mes ingeniero', value: 'valorMesIngeniero' },
                { text: 'Valor Tarea', value: 'valorTarea' },
                { text: 'Valor hora ingeniero', value: 'valorHoraIngeniero' },
            ],
            // desserts: [
            //     {
            //         actividad: 'Administración',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            //     {
            //         actividad: 'Diseño',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            //     {
            //         actividad: 'Desarrollo',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            //     {
            //         actividad: 'Pruebas',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            //     {
            //         actividad: 'Instalación',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            //     {
            //         actividad: 'Documentación',
            //         horasTarea: 2,
            //         costoMesIngeniero: 6000000.00,
            //         valorMesIngeniero: 15000000.00,
            //         valorTarea: 187500.00,
            //         valorHoraIngeniero: 93750.00,
            //     },
            // ],
            desserts:{},
            elemento:{},
            totalTabla:Array(5).fill(0),
            modalEditar:false,
            modalAgregar:false,
            elementoSeleccionado: null,
            posicionTemporal: 0
        }
    },
    methods:{
        agregarCargo(objeto){
            this.$store.commit('addDesserts',objeto)
            this.validarTotalTabla()
            this.modalAgregar =false
        },
        eliminarElemento(id){
            console.log(`Se elimina elemento: ${this.desserts[id].actividad}.`)
            this.desserts.splice(id,1)
            this.validarTotalTabla()
        },
        editarElemento(idx){
            this.posicionTemporal = idx
            this.elementoSeleccionado = this.desserts[idx]
            this.modalEditar=true
        },
        editarCargo(objeto){
            // this.elemento = this.desserts[idx]
            this.$store.commit('editDesserts', this.posicionTemporal, objeto)
            this.desserts[this.posicionTemporal] = objeto
            this.modalEditar = false
            this.validarTotalTabla()
        },
        validarTotalTabla(){
            this.totalTabla= Array(5).fill(0)
            this.desserts = this.$store.state.desserts
            // alert(JSON.stringify(this.desserts))
            this.desserts.map((el, idx) =>{
                // Horas tarea
                this.$set(this.totalTabla, 0, this.totalTabla[0]+el.horasTarea)
                // Costo mes ingeniero
                this.$set(this.totalTabla, 1, this.totalTabla[1]+el.costoMesIngeniero)
                // Valor mes ingeniero
                this.$set(this.totalTabla, 2, this.totalTabla[2]+el.valorMesIngeniero)
                // Valor tarea
                this.$set(this.totalTabla, 3, this.totalTabla[3]+el.valorTarea)
                // Valor hora ingeniero
                this.$set(this.totalTabla, 4, this.totalTabla[4]+el.valorHoraIngeniero)
            })
        }
    },
    mounted(){
        this.validarTotalTabla()
    }
}
</script>

<style scoped>
/* =============================================================================
    Responsive Table CSS
   ========================================================================== */

.dataTable {
  display: block;
  width: 100%;
  margin: 1em 0;
}

.dataTable thead, .dataTable tbody, .dataTable thead tr, .dataTable th {
  display: block;
}

.dataTable thead {
  float: left;
}

.dataTable tbody {
  width: auto;
  position: relative;
  overflow-x: auto;
}

.dataTable td, .dataTable th {
  padding: .625em;
  line-height: 1.5em;
  /* border-bottom: 1px dashed #ccc; */
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.dateTable-items span{
    text-align: center;
    display: flex;
    justify-content: center;
}
.dataTable th {
  text-align: left;
  /* background: rgba(255, 255, 255, 0.14); */
  /* border-bottom: 1px dashed #aaa; */
}

.dataTable tbody tr {
  display: table-cell;
}

.dataTable tbody td {
  display: block;
}

/* .dataTable tr:nth-child(odd)  */
.tableheader, .tableKey{
  background:#339af0;
  color:#fff;
}
.dataTable-icons, .button__content{
    text-align: center;
    display: flex;
    justify-content: center;
}
.dataTable-btn-action{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

@media screen and (min-width: 50em) {

  .dataTable {
    display: table;
  }
  
  .dataTable thead {
    display: table-header-group;
    float: none;
  }
  
  .dataTable tbody {
    display: table-row-group;
  }
  
  .dataTable thead tr, .dataTable tbody tr {
    display: table-row;
  }
  
  .dataTable th, .dataTable tbody td {
    display: table-cell;
  }
  
  .dataTable td, .dataTable th {
    width: auto;
  }
  
}
</style>