<template>
  <div>
    <TaskInput @addTask="addTask" />
    <TaskList :tasks="tasks" @selectTask="selectTask" />
    <PomodoroToggle v-model="mode" />
    
    <Timer
      :task="selectedTask"
      :mode="mode"
      :settings="timerSettings"
      @sessionComplete="saveSession"
    />

    <SettingsModal
      v-model:show="showSettings"
      v-model:settings="timerSettings"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskInput from '~/components/TaskInput.vue'
import TaskList from '~/components/TaskList.vue'
import Timer from '~/components/Timer/Timer.vue.vue'
import PomodoroToggle from '~/components/PomodoroToggle.vue'
import SettingsModal from '~/components/SettingsModal.vue'
import type { TimerSettings,TimerSession } from '~/types/timer'
import type { Task } from '~/types/tasks'
import { useTimerSettings } from '~/composables/useTimerSettings'

const timerSettings = useTimerSettings()

const { mode } = timerSettings.value
const selectedTask = ref<Task>({ id: '', title: '', createdAt: '' })
const tasks = ref<Task[]>([])
const showSettings = ref(false)



function addTask(newTaskTitle: string) {
  tasks.value.push({ id: crypto.randomUUID(), title: newTaskTitle,createdAt: new Date().toISOString(), })
}

function selectTask(task: Task) {
  selectedTask.value = task
}

function saveSession(sessionData: TimerSession) {
  // TODO: backend ya da localstorage'a kaydet
  console.log('Session saved:', sessionData)
}
</script>