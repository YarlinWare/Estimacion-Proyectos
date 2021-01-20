<template>
<div class="text-center">
<!--persistent-->
    <v-dialog   v-model="modal"
                :transition="fullscreen?'dialog-bottom-transition':'dialog-transition'"
                persistent
                :fullscreen="fullscreen"
                :width="width" scrollable
        >
        <v-card class="fondo-curso-modal">
            <v-toolbar class="cerrar">
                <slot name="modaltittle"></slot>
                <v-spacer> </v-spacer>
                <button v-if="mostrarCerrar" @click="$emit('click', false)"
                        class="hvr hvr-scale btn-cerrar">
                    <v-icon>close</v-icon>
                </button>
            </v-toolbar>
            <v-card-text>
                <v-flex contain class="dialog-content" text-xs-center>
                    <slot name="modalcontent"></slot>
                </v-flex>
            </v-card-text>
        </v-card>
    </v-dialog>
</div>
</template>
<script>
export default {
    model: {
        prop: 'modal',
        event: 'click'
    },
    props: {
        modal: Boolean,
        width: {
            type: String,
            default: '700px'
        },
        fullscreen: {
            type: Boolean,
            default: false,
        },
        mostrarCerrar: {
            type: Boolean,
            default: true
        },
        heightCerrar:{
            type: String,
            default: '56px'
        }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
</style>