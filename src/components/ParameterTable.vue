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
                        :class="{}"
                    >
                        <th v-for="(value, key, i) in dessert"
                            :key="`${value}-${key}`"
                            :class="[
                                    'dateTable-items',
                                    {
                                        'tableKey': i==0 || i==1,
                                        'dateTable-items-title': i==1
                                    }
                            ]"
                        >
                            <span><b v-if="i>2">$</b> {{value}} </span>
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
                        <th class="tableKey dateTable-items"></th>
                        <th class="tableKey dateTable-items">Total</th>
                        <th class="dateTable-items"><span>{{totalTabla[0]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[1]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[2]}}</span></th>
                        <th class="dateTable-items"><span>$ {{totalTabla[3]}}</span></th>
                        <th class="dateTable-items"><span>$ {{vhi}}</span></th>
                        <th class="dateTable-items">
                            <div class="dataTable-btn-action">
                                <button class="dataTable-icons btn disabled"
                                        disabled
                                        type="button"
                                ><i class="fa fa-pencil"></i></button>

                                <button class="dataTable-icons btn  disabled"
                                        disabled
                                        type="button"
                                ><i class="fa fa-trash"></i></button>
                            </div>
                        </th>
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
import Agregar from './AgregarCargo';
import Editar from './EditarCargo';
import axios from 'axios';
import api from '../api';

export default {
    components:{
        'agregar-cargo-app': Agregar,
        'editar-cargo-app':Editar
    },
    data () {
        return {
            nuevoCargo:'',
            headers: {},
            desserts:{},
            elemento:{},
            // Valor hora ingeniero:
            vhi:0,
            totalTabla:Array(5).fill(0),
            modalEditar:false,
            modalAgregar:false,
            elementoSeleccionado: null,
            posicionTemporal: 0,
            baseURL:'http://localhost:3001'
        }
    },
    methods:{
        async agregarCargo(objeto) {
            try {
                await api.desserts.create({
                    id:(this.desserts.length),
                    actividad: objeto.actividad,
                    horasTarea: objeto.horasTarea,
                    costoMesIngeniero: objeto.costoMesIngeniero,
                    valorMesIngeniero: objeto.valorMesIngeniero,
                    valorTarea: objeto.valorTarea,
                    valorHoraIngeniero: objeto.valorHoraIngeniero
                })
                // this.desserts = [... this.desserts, res.data]
                this.modalAgregar =false
                this.cargarData()
                this.validarTotalTabla()
            } catch (error) {
                console.error(error)
            }
        },
        async eliminarElemento(id){
            try {
                await api.desserts.remove(id)
                this.cargarData()
            } catch (error) {
                console.error(error)
            }
        },
        editarElemento(idx){
            this.posicionTemporal = idx
            this.elementoSeleccionado = this.desserts[idx]
            this.modalEditar=true
        },
        async editarCargo(objeto){
            // this.elemento = this.desserts[idx]
            // this.$store.commit('editDesserts', this.posicionTemporal, objeto)
            // this.desserts[this.posicionTemporal] = objeto
            // this.modalEditar = false
            // this.validarTotalTabla()
            try {
                await api.desserts.update(this.posicionTemporal, objeto)
                this.modalEditar = false
                this.cargarData()
            } catch (error) {}
        },
        validarTotalTabla(){
            this.totalTabla= Array(5).fill(0)
            // this.desserts = this.$store.state.desserts
            // alert(JSON.stringify(this.desserts))
            this.desserts.map((el, idx) =>{
                // Horas tarea
                this.$set(this.totalTabla, 0, this.totalTabla[0]+Number(el.horasTarea))
                // Costo mes ingeniero
                this.$set(this.totalTabla, 1, this.totalTabla[1]+Number(el.costoMesIngeniero))
                // Valor mes ingeniero
                this.$set(this.totalTabla, 2, this.totalTabla[2]+Number(el.valorMesIngeniero))
                // Valor tarea
                this.$set(this.totalTabla, 3, this.totalTabla[3]+Number(el.valorTarea))
                // Valor hora ingeniero
                this.$set(this.totalTabla, 4, this.totalTabla[4]+Number(el.valorHoraIngeniero))
            })
            this.desserts.slice(Object.keys('id'))
            this.vhi = (this.totalTabla[3]/this.totalTabla[0]).toFixed(2)
            this.$store.commit('valorTotalParametros',this.vhi)
        },
        async cargarData(){
            try {
                const response = await axios.get(`${this.baseURL}/desserts`)
                const headers_titles = await axios.get(`${this.baseURL}/headers`)
                this.desserts = response.data;
                this.headers = headers_titles.data;
                this.validarTotalTabla()
            } catch(e) {
                console.error(e)
            }
        }
    },
    mounted() {
        this.cargarData()
    },
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
.dateTable-items-title span{
    text-align: left;
    display: flex;
    justify-content: left;
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
th, tr{
     width: 200px;
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