<template>
  <button
    @click="toggleMode"
    class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
  >
    {{ mode === 'manual' ? 'Switch to Pomodoro' : 'Switch to Manual' }}
  </button>
</template>

<script setup lang="ts">
import type { TimerMode } from '~/types/timer'

const mode = defineModel<TimerMode>({ default: 'manual' })

function toggleMode() {
  mode.value = mode.value === 'manual' ? 'pomodoro' : 'manual'
}
</script>

<style>

</style>