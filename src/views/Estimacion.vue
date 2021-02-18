<template>
  <div class="about">
    <h1>Lista módulos del proyecto</h1>
    <div v-for="(modulo,index) in listamodulos" :key="`${index}-${modulo.modulo}`">
      <modulo-app :contenido="modulo" :seccion="index"/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
// import api from '../api'
import Modulo from '../components/Modulo'

export default {
  components:{
    'modulo-app':Modulo
  },
  data(){
    return{
      baseURL:'http://localhost:3001',
      listamodulos:{},
      total:0,
      totalHoras:0,
      totalDias:0,
      TotalMeses:0
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
