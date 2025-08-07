<template>
   <TimerCircle :duration="120" /> <!-- 2 minutes -->
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount, toRefs } from 'vue'
import type { TimerSettings, TimerState, SessionType } from '~/types/timer'
import TimerCircle from './TimerCircle.vue'

interface Props {
  settings: TimerSettings
  initialState: TimerState
}

const props = defineProps<Props>()

// Local reactive timer state initialized from prop
const timerState = ref<TimerState>({ ...props.initialState })

let timerId: number | null = null

// Compute progress for circle stroke (0-100)
const progress = computed(() => {
  if (timerState.value.duration === 0) return 0
  return ((timerState.value.duration - timerState.value.remaining) / timerState.value.duration) * 100
})

const totalDuration = 1500 // example total duration seconds (25min)
const remaining = ref(totalDuration)
const radius = 54
const circumference = 2 * Math.PI * radius

// Calculate stroke-dashoffset based on remaining time
const dashOffset = computed(() => {
  return circumference * (1 - remaining.value / totalDuration)
})


// Format remaining time as mm:ss
const formattedTime = computed(() => {
  const minutes = Math.floor(timerState.value.remaining / 60)
  const seconds = timerState.value.remaining % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

// Optional: change bg circle color by session type
const circleBgColor = computed(() => {
  switch (timerState.value.currentSessionType) {
    case 'work':
      return '#e0e7ff' // Indigo 100
    case 'break':
      return '#d1fae5' // Green 100
    
    default:
      return '#e0e7ff'
  }
})

function tick() {
  if (timerState.value.remaining > 0) {
    timerState.value.remaining--
  } else {
    clearInterval(timerId!)
    timerId = null
    timerState.value.isRunning = false
    timerState.value.isPaused = false
    // Burada session bittiğinde emit edebilirsin (opsiyonel)
  }
}

function startTimer() {
  if (timerState.value.isRunning) return
  timerState.value.isRunning = true
  timerState.value.isPaused = false

  if (timerState.value.remaining === 0) {
    timerState.value.remaining = timerState.value.duration
  }

  timerId = window.setInterval(tick, 1000)
}

function pauseTimer() {
  if (!timerState.value.isRunning || timerState.value.isPaused) return
  timerState.value.isPaused = true
  timerState.value.isRunning = false
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
}

function resetTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  timerState.value.remaining = timerState.value.duration
  timerState.value.isRunning = false
  timerState.value.isPaused = false
}

onBeforeUnmount(() => {
  if (timerId) clearInterval(timerId)
})

// Eğer üst componentten settings değişirse timerı resetle
watch(
  () => props.settings,
  (newSettings) => {
    resetTimer()
    timerState.value.duration = newSettings.workDuration // Örneğin sadece workDuration'u kullandık
    timerState.value.remaining = newSettings.workDuration
  },
  { immediate: true }
)
</script>

<style scoped>
.circular-chart {
  max-width: 150px;
  max-height: 150px;
}
</style>