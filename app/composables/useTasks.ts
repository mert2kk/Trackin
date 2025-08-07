import type { Task } from "~/types/tasks"

export const useTasks = () => {
  const tasks = useState<Task[]>('tasks', () => [])
  const selectedTask = useState<Task | null>('selectedTask', () => null)

  function addTask(title: string) {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      createdAt: new Date().toISOString(),
    }
    tasks.value.push(task)
  }

  function selectTask(taskId: string) {
    selectedTask.value = tasks.value.find(t => t.id === taskId) || null
  }

  return {
    tasks,
    selectedTask,
    addTask,
    selectTask,
  }
}