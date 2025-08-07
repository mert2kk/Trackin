import type { TimerSettings } from '~/types/timer'

export const useTimerSettings = () =>
  useState<TimerSettings>('timerSettings', () => ({
    mode: 'manual',
    workDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    workSets: 4,
  }))