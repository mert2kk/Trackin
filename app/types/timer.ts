export type TimerMode = 'manual' | 'pomodoro'
export type SessionType = 'work' | 'shortBreak' | 'longBreak'


export interface TimerState {
    remaining: number
    isRunning: boolean
    isPaused: boolean
    currentSessionType: SessionType
    workSetsRemaining: number
    currentTaskId: string | null
}

export interface TimerSettings {
    workDuration: number
    shortBreakDuration: number
    longBreakDuration: number
    workSets: number
}


export interface TimerSession {
    taskId: string
    duration: number
    type: SessionType
    startedAt?: number
}