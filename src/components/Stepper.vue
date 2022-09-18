<template>
  <div>
    <button aria-label="decrement" @click="decrement">-</button>
    <slot name="counter" :count="count">
      <span data-cy="counter">{{ count }}</span>
    </slot>
    <button aria-label="increment" @click="increment">+</button>
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
  },
  methods: {
    increment() {
      this.count++
      this.$emit('change', this.count)
    },
    decrement() {
      this.count--
      this.$emit('change', this.count)
    }
  }
})
</script>
