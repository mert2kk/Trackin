<template>
  <div class="relative flex flex-col items-center justify-center p-8 bg-[#F5AF00] bg-opacity-80 rounded-xl shadow-lg ">
    
    <PomodoroToggle v-model="mode" class="flex mb-2" />
    <Timer
      :task="selectedTask"
      :mode="mode"
      :key="mode"
    />
    <div>
    <TaskInput @addTask="addTask" />
    <TaskList :tasks="tasks" @selectTask="selectTask" />
  </div>

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


</script>