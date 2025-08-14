<template>
  <div>
    <div>
      <TimerCircle  :timerSettings="activeSettings" v-model:timerState="timerState"/>
    </div>
        <div class="flex gap-4 justify-center">
      <button
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        @click="start"
        :disabled="timerState.isRunning"
      >
        Start
      </button>
      <button
        class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 disabled:opacity-50"
        @click="pause"
        :disabled="!timerState.isRunning"
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
    <div class="flex justify-center mt-4">    
      <SettingsModal
      v-if="mode === 'manual'"
      v-model:show="showSettings"   
      v-model:settings="timerSettings"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '~/types/tasks';
import type { TimerState,TimerSettings, TimerMode } from '~/types/timer'

let interval: any| null = null

const props = defineProps<{
  task: Task
  mode: TimerMode
}>()

const activeSettings = computed(() =>
  props.mode === 'manual' ? timerSettings.value : pomodoroSettings
)

const pomodoroSettings = {
  workDuration: 25 * 60,
  shortBreakDuration: 5 * 60,
  longBreakDuration: 15 * 60,
  workSets: 4,
}

const timerSettings= ref<TimerSettings>({
    workDuration: 0.1 * 60,
    shortBreakDuration: 0.1 * 60,
    longBreakDuration: 0.1 * 60,
    workSets: 2,
})


const timerState = ref<TimerState>({
  remaining: activeSettings.value.workDuration,
  isRunning: false,
  isPaused: true,
  currentSessionType: 'work',
  workSetsRemaining: activeSettings.value.workSets,
  currentTaskId: null
})

const showSettings = ref(props.mode !== 'pomodoro')

function start() {
  if (interval || timerState.value.isRunning) return
  timerState.value.isRunning = true
  timerState.value.isPaused = false
  interval = setInterval(() => {
    if (timerState.value.remaining > 0) {
      timerState.value.remaining--
    } else {
            nextSession()

    }
  }, 1000)
}


function nextSession() {
  pause() // Pause the timer before switching sessions

  
  const audio = new Audio('/sounds/ding.mp3')
  audio.play().catch(() => {
    alert('Zil sesi oynatılamadı — kullanıcı etkileşimi gerekebilir')
  })

  if (timerState.value.currentSessionType === 'work') {
    timerState.value.workSetsRemaining--

    if (timerState.value.workSetsRemaining > 0) {
      timerState.value.currentSessionType = 'shortBreak'
      timerState.value.remaining = timerSettings.value.shortBreakDuration
    } else {
      timerState.value.currentSessionType = 'longBreak'
      timerState.value.remaining = timerSettings.value.longBreakDuration
    }

  } else if (timerState.value.currentSessionType === 'shortBreak') {
    timerState.value.currentSessionType = 'work'
    timerState.value.remaining = timerSettings.value.workDuration

  } else if (timerState.value.currentSessionType === 'longBreak') {
    alert('Tüm setler ve uzun mola tamamlandı')
    reset()
  }
  //start()
  //Otomatik start 
}

function pause() {
  timerState.value.isRunning = false
  timerState.value.isPaused = true
  clearInterval(interval)
  interval = null
}

function reset() {
  pause()
  timerState.value.remaining = timerSettings.value.workDuration
  timerState.value.workSetsRemaining = timerSettings.value.workSets
  timerState.value.currentSessionType = 'work'
  timerState.value.isPaused = true
  timerState.value.isRunning = false
}

onBeforeUnmount(() => {
  pause()
})
</script>
