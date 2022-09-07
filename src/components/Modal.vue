<template>
  <div class="modal">
    <div data-cy="modal-header">
      <slot name="header">
        <span>No Title</span>
      </slot>
      <hr />
    </div>
    <div data-cy="modal-content">
      <slot />
    </div>
    <template v-if="$slots.footer">
      <div data-cy="modal-footer">
        <hr />
        <slot name="footer" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style>
.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 30rem;
  height: 25rem;
}
</style>
