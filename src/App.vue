<template>
  <h1>Hello, Vue 3</h1>
  <Stepper initial="5" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Stepper from './components/Stepper.vue'

export default defineComponent({
  components: {
    Stepper
  }
})
</script>
