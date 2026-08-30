import { useState, type ReactNode } from 'react'
import { TrainingsContext, DEFAULT } from './TrainingsContext'
import type { Training } from './types'

export default function TrainingsProvider({ children }: { children: ReactNode }) {

    const [trainings, setTrainings] = useState<Training[]>(DEFAULT)

    return (
        <TrainingsContext.Provider value={{ trainings, setTrainings }}>
            {children}
        </TrainingsContext.Provider>
    )

}