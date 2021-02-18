<template>
    <div>
        <v-layout wrap row justify-center>
            <v-flex xs12 sm8>
                <v-card>
                    <v-card-title primary-title v-if="contenido.length != 0">
                        <div>
                            <h1>{{contenido.modulo}}</h1>

                            <table class="blueTable">
                                <thead>
                                    <tr>
                                        <th rowspan="3" class="funcion">Función</th>
                                        <th>N° de campos</th>
                                        <th>Objetos</th>
                                        <th>Complejidad</th>
                                        <th>Acciones</th>
                                        <th>Horas</th>
                                        <th>Costo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="(item, i) in contenido.elemento" :key="item+'-'+i">
                                        <td>{{item.funcion}}</td>
                                        <td>{{item.num_campos}}</td>
                                        <td>{{item.objetos}}</td>
                                        <td>
                                            <!-- <select v-model="selected[idx]">
                                                <option disabled value="">Seleccione un elemento</option>
                                                <option v-for="opt in opciones" :key="opt">{{opt.tipo}}</option>
                                            </select> -->
                                            {{calcularComplejidad(item.num_campos,item.objetos)}}
                                        </td>
                                        <td>{{item.acciones}}</td>
                                        <td>{{item.horas}}</td>
                                        <td>{{calcular($store.state.totalParametros, item.horas,seccion)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3>
                            Total módulo = ${{totalModulo[seccion]}}
                        </h3>
                    </v-card-title>

                    <v-card-actions>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
export default {
    props:{
        contenido:{
            type: Object
        },
        seccion:{
            type:Number
        }
    },
    data(){
        return{
            selected:[],
            auxiliarSuma:0,
            totalModulo:[],
            opciones:[
                {
                    tipo:'Baja',
                    valor:1
                },
                {
                    tipo:'Media',
                    valor:2
                },
                {
                    tipo:'Alta',
                    valor:4
                },
                {
                    tipo:'Muy alta',
                    valor:6
                }
            ]
        }
    },
    methods:{
        calcular(a,b, posicion){
            var resultado = (a*b)
            this.auxiliarSuma = this.auxiliarSuma + resultado
            this.$set(this.totalModulo,posicion,this.auxiliarSuma)
            return resultado
        },

        calcularComplejidad(num_campos,objetos){

            console.log(num_campos,objetos)
            if (num_campos<6) {
                if (objetos == 2) {
                    return "Media"
                }
                else if (objetos > 2) {
                    return 'Alta'
                }else{
                    return 'Baja'
                }
            }

            else if (num_campos>11) {
                if (objetos > 2) {
                    return 'Alta'
                }
                else{
                    return 'Media'
                }
            }
            else{
                if (objetos > 2) {
                    return 'Muy alta'
                }
                else{
                    return 'Alta'
                }
            }

        }
    }
}
</script>
<style scoped>
th.funcion{
    width: 200px;
}
table{
    width: 100%;
}
table.blueTable {
  border: 1px solid #1C6EA4;
  background-color: #ffffff;
  text-align: left;
  border-collapse: collapse;
}
table.blueTable td, table.blueTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.blueTable tbody td {
  font-size: 13px;
}
table.blueTable tr:nth-child(even) {
  background: #D0E4F5;
}
table.blueTable thead {
  background: #0581d4;
  border-bottom: 2px solid #ffffff;
}
table.blueTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table.blueTable thead th:first-child {
  border-left: none;
}

</style>
