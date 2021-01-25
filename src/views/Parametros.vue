<template>
  <div class="parametros">
    <h1>Parametros</h1>
    <div>
        <Parameter-app/>
    </div>
    <!-- <h1>Tabla</h1> -->
    <div>
        <Parameter-table-app/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import Parameter from '@/components/Parameter'
import ParameterTable from '@/components/ParameterTable'

export default {
    name: 'parametros',
    components: {
        'Parameter-app':Parameter,
        'Parameter-table-app':ParameterTable,
    }
}
</script>
