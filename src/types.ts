export interface Exercise {
    name: string
    sets: number
    reps: number
}

export type Exercises = Exercise[]

export type Training = {
    id: string
    trainingName: string
    exercises: Exercises
}