import { createContext } from 'react'
import type { Training } from './types'

export const DEFAULT: Training[] = [
    {
        trainingName: '',
        exercises: [
            {
                name: '',
                sets: 0,
                reps: 0
            }
        ]
    }
]

export interface TrainingsContextType {
    trainings: Training[]
    setTrainings: React.Dispatch<React.SetStateAction<Training[]>>
}

export const TrainingsContext = createContext<TrainingsContextType>({
    trainings: [],
    setTrainings: () => { }
})