<template>
  <div>
    <div><ManualTimer :settings="props.settings" :initialState="timerState"/></div>
    <div><PomodoroTimer/></div>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '~/types/tasks';
import ManualTimer from './ManualTimer.vue';
import PomodoroTimer from './PomodoroTimer.vue';
import type { TimerState,TimerSettings, TimerMode } from '~/types/timer'


const timerState = ref<TimerState>({
    duration: 0,
    remaining: 0,
    isRunning: false,
    isPaused: false,
    currentSessionType: 'work',
    workSetsCompleted: 0,
    currentTaskId: null,
  })

const props = defineProps<{
  task: Task
  mode: TimerMode
  settings: TimerSettings
}>()

</script>

<style>

</style>