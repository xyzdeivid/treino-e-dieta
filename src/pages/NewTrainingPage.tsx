import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import ExerciseInput from "../components/newTrainingPage/ExerciseInput"

import type { Exercises, Training } from "../types"

import { TrainingsContext } from '../TrainingsContext'

export default function NewTrainingPage() {

    const [trainingName, setTrainingName] = useState('')
    const [exercises, setExercises] = useState<Exercises>([])
    const navigate = useNavigate()

    const { setTrainings } = useContext(TrainingsContext)

    return (
        <div style={styles.container}>
            <div>
                <label>Nome do Treino:</label>
                <input
                    style={{ marginLeft: '4px' }}
                    type="text"
                    value={trainingName}
                    onChange={(e) => setTrainingName(e.target.value)}
                />
            </div>
            <hr style={{ margin: '20px auto', width: '80%' }} />
            <ExerciseInput setExercises={setExercises} />
            <ExerciseInput setExercises={setExercises} />
            <ExerciseInput setExercises={setExercises} />
            <ExerciseInput setExercises={setExercises} />
            <hr style={{ margin: '20px auto', width: '80%' }} />
            <button onClick={() => {
                const newTraining: Training = {
                    trainingName,
                    exercises
                }
                setTrainings(prev => [...prev, newTraining])
                navigate('/')
            }}>Criar Treino</button>
        </div>
    )

}

const styles = {

    container: {
        margin: '16px 12px'
    }

} as const