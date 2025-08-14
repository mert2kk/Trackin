<template>
  <div class="flex items-center justify-center">
    <div
      @click="toggleMode"
      class="relative w-48 h-8 flex items-center rounded-full cursor-pointer select-none transition-all"
      :class="mode === 'manual' ? 'bg-gray-300 dark:bg-gray-700' : 'bg-red-400'"
    >
      <!-- Slider circle -->
      <div
        class="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md transition-all"
        :class="mode === 'manual' ? 'left-1' : 'right-1'"
      >
        <img
          :src="mode === 'manual' ? manualIcon : tomatoIcon"
          alt="icon"
          class="w-6 h-6 mx-auto my-auto"
        />
      </div>

      <!-- Labels -->
      <div class="flex justify-between w-full px-4 text-xs font-semibold text-white">
        <span :class="mode === 'manual' ? 'text-black flex pl-6' : 'opacity-50  flex '">Manual</span>
        <span :class="mode === 'pomodoro' ? 'text-black flex pr-6' : 'opacity-50 flex'">Pomodoro</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimerMode } from '~/types/timer'
const tomatoIcon = '/images/tomato.png'
const manualIcon = '/images/manualTimer.png'

const mode = defineModel<TimerMode>({ default: 'manual' })

function toggleMode() {
  mode.value = mode.value === 'manual' ? 'pomodoro' : 'manual'
}
</script>

<style>

</style>