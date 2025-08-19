<template>
  <div>
    <div>
      <div class="flex justify-evenly">
        <button
          @click="timerReset"
          class="text-black font-bold hover:bg-[#707070] rounded-xl px-2 py-1"
        >
          <ArrowPathIcon class="w-5 h-5" />
        </button>
      </div>

      <TimerCircle
        :timerSettings="activeSettings"
        v-model:timerState="timerState"
        :mode="mode"
      />
    </div>
    <div class="flex gap-4 justify-center items-center">
      <!-- Start / Pause toggle -->
      <button
        v-if="!timerState.isRunning"
        @click="start"
        class="px-4 py-2 rounded-xl flex items-center gap-2"
        :class="
          mode === 'pomodoro'
            ? 'bg-[#CC3600] hover:bg-red-600 text-white'
            : 'bg-[#1E3327] hover:bg-[#233e2f] text-white'
        "
      >
        <PlayIcon class="w-5 h-5" />
      </button>

      <button
        v-else
        @click="pause"
        class="px-4 py-2 rounded-xl flex items-center gap-2"
        :class="
          mode === 'pomodoro'
            ? 'bg-[#CC3600] hover:bg-red-600 text-white'
            : 'bg-[#1E3327] hover:bg-[#2c4b3a] text-white '
        "
      >
        <PauseIcon class="w-5 h-5" />
      </button>

      <button
        @click="sessionReset"
        :class="
          mode === 'pomodoro'
            ? 'bg-[#CC3600] hover:bg-red-600 text-white px-4 py-2 rounded-xl flex items-center gap-2'
            : 'bg-[#1E3327] hover:bg-[#2c4b3a] text-white px-4 py-2 rounded-xl flex items-center gap-2'
        "
      >
        <ArrowUturnLeftIcon class="w-5 h-5" />
      </button>
    </div>
    <div class="flex justify-center my-4 h-4">
      <SettingsModal
        v-if="mode === 'manual'"
        v-model:show="showSettings"
        v-model:settings="timerSettings"
        @setSettings="updateSettings"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from "~/types/tasks";
import type { TimerState, TimerSettings, TimerMode } from "~/types/timer";
import {
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/vue/24/solid";

let interval: any | null = null;

const props = defineProps<{
  task: Task;
  mode: TimerMode;
}>();

const activeSettings = computed(() =>
  props.mode === "manual" ? timerSettings.value : pomodoroSettings
);

const pomodoroSettings = {
  workDuration: 25 * 60,
  shortBreakDuration: 5 * 60,
  longBreakDuration: 15 * 60,
  workSets: 4,
};

const timerSettings = ref<TimerSettings>({
  workDuration: 0.1 * 60,
  shortBreakDuration: 0.1 * 60,
  longBreakDuration: 0.1 * 60,
  workSets: 2,
});

const timerState = ref<TimerState>({
  remaining: activeSettings.value.workDuration,
  isRunning: false,
  isPaused: true,
  currentSessionType: "work",
  workSetsRemaining: activeSettings.value.workSets,
  currentTaskId: null,
});

const showSettings = ref(props.mode !== "pomodoro");

function start() {
  if (interval || timerState.value.isRunning) return;
  timerState.value.isRunning = true;
  timerState.value.isPaused = false;
  interval = setInterval(() => {
    if (timerState.value.remaining > 0) {
      timerState.value.remaining--;
    } else {
      nextSession();
    }
  }, 1000);
}

function nextSession() {
  pause(); // Pause the timer before switching sessions

  const audio = new Audio("/sounds/CompletedSound.mp3");
  audio.play().catch(() => {
    alert("Zil sesi oynatılamadı — kullanıcı etkileşimi gerekebilir");
  });

  if (timerState.value.currentSessionType === "work") {
    timerState.value.workSetsRemaining--;

    if (timerState.value.workSetsRemaining > 0) {
      timerState.value.currentSessionType = "shortBreak";
      timerState.value.remaining = timerSettings.value.shortBreakDuration;
    } else {
      timerState.value.currentSessionType = "longBreak";
      timerState.value.remaining = timerSettings.value.longBreakDuration;
    }
  } else if (timerState.value.currentSessionType === "shortBreak") {
    timerState.value.currentSessionType = "work";
    timerState.value.remaining = timerSettings.value.workDuration;
  } else if (timerState.value.currentSessionType === "longBreak") {
    alert("Tüm setler ve uzun mola tamamlandı");
    timerReset();
  }
  //start()
  //Otomatik start
}

function pause() {
  timerState.value.isRunning = false;
  timerState.value.isPaused = true;
  clearInterval(interval);
  interval = null;
}

function sessionReset() {
  pause();

  if (props.mode === "manual") {
    // Manual
    if (timerState.value.currentSessionType === "work") {
      timerState.value.remaining = timerSettings.value.workDuration;
    } else if (timerState.value.currentSessionType === "shortBreak") {
      timerState.value.remaining = timerSettings.value.shortBreakDuration;
    } else {
      timerState.value.remaining = timerSettings.value.longBreakDuration;
    }
  } else {
    // Pomodoro
    if (timerState.value.currentSessionType === "work") {
      timerState.value.remaining = pomodoroSettings.workDuration;
    } else if (timerState.value.currentSessionType === "shortBreak") {
      timerState.value.remaining = pomodoroSettings.shortBreakDuration;
    } else {
      timerState.value.remaining = pomodoroSettings.longBreakDuration;
    }
  }
  timerState.value.isPaused = true;
  timerState.value.isRunning = false;
}

function timerReset() {
  pause();
  timerState.value.remaining =
    props.mode === "manual"
      ? timerSettings.value.workDuration
      : pomodoroSettings.workDuration;
  timerState.value.workSetsRemaining =
    props.mode === "manual"
      ? timerSettings.value.workSets
      : pomodoroSettings.workSets;
  timerState.value.currentSessionType = "work";
  timerState.value.isPaused = true;
  timerState.value.isRunning = false;
}

function updateSettings() {
  timerReset();
}

onBeforeUnmount(() => {
  pause();
});
</script>
