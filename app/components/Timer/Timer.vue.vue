<template>
  <div>
    <div><ManualTimer/></div>
    <div><PomodoroTimer/></div>
  </div>
</template>

<script lang="ts" setup>
import ManualTimer from './ManualTimer.vue';
import PomodoroTimer from './PomodoroTimer.vue';


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