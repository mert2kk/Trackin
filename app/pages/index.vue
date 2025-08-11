<template>
  <div>
    <TaskInput @addTask="addTask" />
    <TaskList :tasks="tasks" @selectTask="selectTask" />
    <PomodoroToggle v-model="mode" />
    
    <Timer
      :task="selectedTask"
      :mode="mode"
      @sessionComplete="saveSession"
    />


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskInput from '~/components/TaskInput.vue'
import TaskList from '~/components/TaskList.vue'
import Timer from '~/components/Timer/Timer.vue.vue'
import PomodoroToggle from '~/components/PomodoroToggle.vue'
import type { TimerSession,TimerMode } from '~/types/timer'
import type { Task } from '~/types/tasks'


const mode = ref<TimerMode>('manual')

const selectedTask = ref<Task>({ id: '', title: '', createdAt: '' })
const tasks = ref<Task[]>([])



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