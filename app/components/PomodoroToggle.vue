<template>
  <div class="flex items-center justify-center">
    <div
      @click="toggleMode"
      class="relative w-48 h-8 flex items-center  rounded-full cursor-pointer select-none transition-all"
      :class="mode === 'manual' ? 'bg-[#707070] ' : 'bg-[#CC3600] '"
    >
      <!-- Slider circle -->
      <div
        class="absolute top-1/2 transform -translate-y-1/2 w-6 h-6  rounded-full shadow-md transition-all"
        :class="mode === 'manual' ? 'left-1' : 'right-1'"
      >
        <img
          :src="mode === 'manual' ? manualIcon : tomatoIcon"
          alt="icon"
          class="w-6 h-6 mx-auto my-auto"
        />
      </div>

      <!-- Labels -->
      <div class="flex w-full justify-center text-xs font-semibold text-white space-x-4">
        <div :class="mode === 'manual' ? 'text-[#EBEBEB] flex justify-center' : 'opacity-30 '">Manual</div>
        <div :class="mode === 'pomodoro' ? 'text-[#EBEBEB] flex ' : 'opacity-30 '">Pomodoro</div>
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