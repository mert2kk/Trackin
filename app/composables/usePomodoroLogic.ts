import { useTimerSettings } from "./useTimerSettings"
type SessionType = 'work' | 'shortBreak' | 'longBreak'

interface PomodoroState {
  currentSet: number
  session: SessionType
  remainingSeconds: number
}

export const usePomodoroLogic = () => {
  const timerSettings = useTimerSettings()
  const { workDuration, shortBreakDuration, longBreakDuration, workSets } = timerSettings.value

  const state = reactive<PomodoroState>({
    currentSet: 1,
    session: 'work',
    remainingSeconds: workDuration,
  })

  function nextSession() {
    if (state.session === 'work') {
      if (state.currentSet < workSets) {
        state.session = 'shortBreak'
        state.remainingSeconds = shortBreakDuration
      } else {
        state.session = 'longBreak'
        state.remainingSeconds = longBreakDuration
      }
    } else {
      state.currentSet += 1
      state.session = 'work'
      state.remainingSeconds = workDuration
    }
  }

  return { state, nextSession }
}