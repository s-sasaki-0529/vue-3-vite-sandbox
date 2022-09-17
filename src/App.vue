<template>
  <h1>Position</h1>
  <p>x: {{ x }}</p>
  <p>y: {{ y }}</p>
</template>

<script setup lang="ts">
import { useMousePosition } from './hooks/useMousePosition'

const { x, y } = $(useMousePosition())
</script>
