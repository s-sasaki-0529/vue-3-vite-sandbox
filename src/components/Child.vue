<template>
  <div class="child">
    <h1>Child</h1>
    <input v-model="message" type="text" />
  </div>
</template>

<script lang="ts">
import Parent from './Parent.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  extends: Parent,
  watch: {
    message(newMessage) {
      console.log(this)
    }
  }
})
</script>
