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
        :stroke-dashoffset="(timeLeft / props.duration) * 283"
        stroke-linecap="round"
        transform="rotate(-90 50 50)"
      />
    </svg>

    <!-- Time Label -->
    <div class="absolute inset-0 flex items-center justify-center text-4xl font-mono">
      {{ timeLabel }}
    </div>

    <!-- Control Buttons -->
    <div class="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-4">
      <button
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        @click="start"
        :disabled="isRunning"
      >
        Start
      </button>

      <button
        class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 disabled:opacity-50"
        @click="pause"
        :disabled="!isRunning"
      >
        Pause
      </button>

      <button
        class="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    required: true,
  }
})

// Reactive state
const timeLeft = ref(props.duration)
const isRunning = ref(false)
let interval = null

// Computed time label
const timeLabel = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60)
  const seconds = timeLeft.value % 60
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})

// Methods
function start() {
  if (interval || isRunning.value) return
  isRunning.value = true
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      pause()
    }
  }, 1000)
}

function pause() {
  isRunning.value = false
  clearInterval(interval)
  interval = null
}

function reset() {
  pause()
  timeLeft.value = props.duration
}

onBeforeUnmount(() => {
  pause()
})
</script>

<style scoped>
/* Optional: make sure container below the timer has space */
.relative {
  padding-bottom: 4rem; /* space for buttons */
}
</style>