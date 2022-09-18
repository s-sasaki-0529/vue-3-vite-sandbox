<template>
  <!-- vuei18n 依存-->
  <h1 data-cy="message">{{ $t('message.hello') }}</h1>
  <button data-cy="toggle" @click="toggleLocale">toggleLocale</button>

  <!-- pinia 依存-->
  <div>
    <button data-cy="decrement" @click="store.decrement">-</button>
    <span data-cy="count">{{ store.count }}</span>
    <button data-cy="increment" @click="store.increment">+</button>
  </div>

  <!-- vue-router 依存-->
  <div>
    <router-link data-cy="link" to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCounterStore } from '../store'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    return { store }
  },
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'ja' ? 'en' : 'ja'
    }
  }
})
</script>
