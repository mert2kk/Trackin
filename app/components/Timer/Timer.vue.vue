<template>
  <div>
    <div><ManualTimer/></div>
    <div><PomodoroTimer/></div>
  </div>
</template>

<script lang="ts" setup>
import ManualTimer from './ManualTimer.vue';
import PomodoroTimer from './PomodoroTimer.vue';
import type { TimerState } from '~/types/timer'


const timerState = ref<TimerState>({
    duration: 0,
    remaining: 0,
    isRunning: false,
    isPaused: false,
    currentSessionType: 'work',
    workSetsCompleted: 0,
    currentTaskId: null,
  })

defineProps({
  task: {
    type: Object,
    required: false,
  },
  mode: {
    type: String,
    default: 'manual',
  },
  settings: {
    type: Object,
    required: true,
  },
})
</script>

<style>

</style>