export type TimerMode = 'manual' | 'pomodoro'
export type SessionType = 'work' | 'break'


export interface TimerState {
    duration: number
    remaining: number
    isRunning: boolean
    isPaused: boolean
    currentSessionType: SessionType
    workSetsCompleted: number
    currentTaskId: string | null
}

export interface TimerSettings {
    mode: TimerMode
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