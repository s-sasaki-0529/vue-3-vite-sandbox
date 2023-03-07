<template>
  <Child />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Parent from './components/Parent.vue'
import Child from './components/Child.vue'
export default defineComponent({
  components: {
    Parent,
    Child
  }
})
</script>
