<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>

    </div>
    <div class="column is-three-quarter">
      <FormularioTimer/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTimer from './components/FormularioTimer.vue'


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTimer,

  }
});
</script>

<style>

</style>
