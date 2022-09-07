<template>
  <Stepper>
    <template #counter="{ count }">
      <span data-cy="counter">hogehoge{{ count }}</span>
    </template>
  </Stepper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Stepper from './components/Stepper.vue'

export default defineComponent({
  components: {
    Stepper
  },
  methods: {
    onChangeValue(value: number) {
      alert(value)
    }
  }
})
</script>
