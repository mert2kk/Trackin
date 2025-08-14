<template>
  <div class="relative w-72 h-72 mx-auto">
    <!-- Circle Timer SVG -->
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="gray"
        stroke-width="7"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        stroke-width="7"
        fill="none"
        stroke-dasharray="283"
        :stroke-dashoffset="(timerState.remaining / props.timerSettings.workDuration) * 283"
        stroke-linecap="round"
        transform="rotate(-90 50 50)"
      />
    </svg>
    <div class="flex justify-center mt-2">{{ timerState.currentSessionType }}</div>
    <div class="flex justify-center mt-2">{{ timerState.workSetsRemaining }}</div>
    <!-- Time Label -->
    <div class="absolute inset-0 flex items-center justify-center text-4xl font-mono">
      {{ timeLabel }}
    </div>

   
  </div>
</template>

<script setup lang="ts">
import {  computed } from 'vue'
import type { TimerSettings, TimerState } from '~/types/timer'

const props = defineProps<{
  timerSettings: TimerSettings
  timerState: TimerState
}>()



// Computed time label
const timeLabel = computed(() => {
  
  const minutes = Math.floor(props.timerState.remaining / 60)
  const seconds = props.timerState.remaining % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})


</script>

<style scoped>
/* Optional: make sure container below the timer has space */
.relative {
  padding-bottom: 4rem; /* space for buttons */
}
</style>