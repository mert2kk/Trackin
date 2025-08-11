<template>
  <div>
    <div><TimerCircle  :timerSettings="props.mode === 'manual' ? timerSettings : pomodoroSettings"
/></div>
//TODO: Butonlar burda olmali gibi
    <div>    
      <SettingsModal
      v-model:show="showSettings"
      v-model:settings="timerSettings"
    /></div>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '~/types/tasks';

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
}>()

const pomodoroSettings = {
  workDuration: 25 * 60,
  shortBreakDuration: 5 * 60,
  longBreakDuration: 15 * 60,
  workSets: 4,
}

const timerSettings= defineModel<TimerSettings>({
  default: {
    workDuration: 20 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    workSets: 1,
  },
})

const showSettings = ref(props.mode !== 'pomodoro')


</script>

<style>

</style>