<template>
  <div>
    <button aria-label="decrement" @click="count--">-</button>
    <span data-cy="counter">{{ count }}</span>
    <button aria-label="increment" @click="count++">+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    initial: {
      type: Number,
      default: 0
    }
  },
  emits: ['change'],
  data() {
    return {
      count: this.initial
    }
  }
})
</script>
