<template>
<div class="box has-text-weight-bold" :style="estilos">
    <!-- O que tiver dentro do componente vai ser renderizado -->
    <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name:"Box",
    data(){
        return{
            estilos: {
                // 'background-color': '#FAF0CA' --- UM OU OUTRO
                backgroundColor: '#FAF0CA'
            }
        }
    }
})
</script>

