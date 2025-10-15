<template>
  <div
    class="relative aspect-square w-[480px] mx-auto xxSmall:w-[220px] xSmall:w-[300px] Small:w-[360px] md:w-[600px] lg:w-[720px] xl:w-[900px]"
  >
    <!-- Circle Timer SVG -->
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <circle
        cx="50"
        cy="50"
        r="45"
        :stroke="'#D3AB9E'"
        stroke-width="3"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        :stroke="props.mode === 'pomodoro' ? '#CC3600' : '#1E3327'"
        stroke-width="3"
        fill="none"
        stroke-dasharray="283"
        :stroke-dashoffset="
          (timerState.remaining / currentSessionDuration) * 283
        "
        stroke-linecap="round"
        transform="rotate(-90 50 50)"
        class="curentColor"
      />
      <text
        x="50"
        y="54"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="18"
        font-family="mono, sans-serif"
        fill="#E7D0C5"
      >
        {{ timeLabel }}
      </text>
    </svg>
    <div class="flex justify-center mt-2 font-bold">{{ sessionLabel }}</div>
    <div class="flex justify-center mt-1 font-bold">
      Sets:{{ timerState.workSetsRemaining }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { TimerMode, TimerSettings, TimerState } from "~/types/timer";

const props = defineProps<{
  timerSettings: TimerSettings;
  timerState: TimerState;
  mode: TimerMode;
}>();

//timer settings is props and not reactive
const currentSessionDuration = computed(() => {
  if (props.timerState.currentSessionType === "work")
    return props.timerSettings.workDuration * 60;
  if (props.timerState.currentSessionType === "shortBreak")
    return props.timerSettings.shortBreakDuration * 60;
  return props.timerSettings.longBreakDuration * 60;
});

// Computed time label
const timeLabel = computed(() => {
  const minutes = Math.floor(props.timerState.remaining / 60);
  const seconds = props.timerState.remaining % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

const sessionLabel = computed(() => {
  return props.timerState.currentSessionType
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
});
</script>

<style scoped>
/* Optional: make sure container below the timer has space */
.relative {
  padding-bottom: 4rem; /* space for buttons */
}
</style>
