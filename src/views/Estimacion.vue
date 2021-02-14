<template>
  <div class="about">
    <h1>Lista módulos del proyecto</h1>
    <div v-for="(modulo,index) in listamodulos" :key="`${index}-${modulo.modulo}`">
      <h1>{{modulo.modulo}}</h1>
      <ul>
        <li v-for="item in modulo.elemento" :key="item">
          Funcion:{{item.funcion}} - #campos: {{item.num_campos}} - Objetos: {{item.objetos}} - complejidad {{item.complejidad}}
          - acciones: {{item.acciones}} - horas {{item.horas}} - costo {{item.costo}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import api from '../api'
export default {
  data(){
    return{
      baseURL:'http://localhost:3001',
      listamodulos:{}
    }
  },
  methods:{
    async cargarData(){
      try {
        const response = await axios.get(`${this.baseURL}/modulos`)
        this.listamodulos = response.data;
        // this.validarTotalTabla()
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
