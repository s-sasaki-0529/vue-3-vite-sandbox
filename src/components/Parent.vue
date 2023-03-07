<template>
  <div class="parent">
    <h1>Parent</h1>
    <input v-model="message" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue 3'
    }
  },
  watch: {
    message(newMessage) {
      console.log(this)
    }
  }
}
</script>
