import { useContext, useState } from 'react'
import { TrainingsContext } from '../TrainingsContext'
import { useParams } from 'react-router-dom'
import ExercisesCard from '../components/trainingPage/ExercisesCard'
import type { Exercise } from '../types'
import ExercisesSets from '../components/trainingPage/ExerciseSets'

export default function TrainingPage() {

    const { id } = useParams()
    const { trainings } = useContext(TrainingsContext)
    const training = trainings.find(current => current.id === id)

    const [showExerciseSets, setShowExerciseSets] = useState(false)
    const [currentExercise, setCurrentExercise] = useState<Exercise>({} as Exercise)

    return (
        <>
            {
                training && (
                    <ExercisesCard
                        training={training}
                        setShowExerciseSets={setShowExerciseSets}
                        setCurrentExercise={setCurrentExercise}
                    />
                )
            }
            {
                showExerciseSets && (
                    <ExercisesSets exercise={currentExercise} />
                )
            }
        </>
    )

}