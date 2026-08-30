import { useState, useEffect } from "react"

import type { Exercises } from "../../types"

interface ExerciseInputProps {
    setExercises: React.Dispatch<React.SetStateAction<Exercises>>
}

export default function ExerciseInput({ setExercises }: ExerciseInputProps) {

    const [exerciseName, setExerciseName] = useState('')
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)

    useEffect(() => {

        if (exerciseName && sets > 0 && reps > 0) {
            setExercises(prevExercises => {
                const updatedExercises = [...prevExercises, { name: exerciseName, sets, reps }]
                // Removendo duplicatas com base no nome do exercício
                const exercises = [...new Map(updatedExercises.map(item => [item.name, item])).values()]
                return exercises
            })
        }

    }, [exerciseName, sets, reps])

    return (
        <div style={styles.container}>
            <input
                style={styles.nameInput}
                type="text"
                placeholder="Exercício"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
            />
            <input
                style={styles.numberInput}
                type="number"
                placeholder="Séries"
                onChange={(e) => setSets(parseInt(e.target.value) || 0)}
            />
            <input
                style={styles.numberInput}
                type="number"
                placeholder="Repetições"
                onChange={(e) => setReps(parseInt(e.target.value) || 0)}
            />
        </div>
    )

}

const styles = {

    container: {
        marginBottom: '10px',
        display: 'flex',
        gap: '10px',
    },

    nameInput: {
        width: '150px',
    },

    numberInput: {
        width: '70px',
    }

} as const