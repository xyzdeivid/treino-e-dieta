import type { Exercise, Training } from '../../types'

export default function ExercisesCard({ training, setShowExerciseSets, setCurrentExercise }: { training: Training; setShowExerciseSets: (show: boolean) => void; setCurrentExercise: (exercise: Exercise) => void }) {

    return (
        <div style={styles.container}>
            <h3 style={{ marginBottom: '16px' }}>
                {training.trainingName}
            </h3>
            <div style={styles.exercisesCard}>
                {training.exercises.map((exercise, index) => {
                    return (
                        <>
                            <div style={styles.exerciseLine}>
                                <ul>
                                    <li><strong>Exercício:</strong> {exercise.name}</li>
                                    <li><strong>Séries:</strong> {exercise.sets}</li>
                                    <li><strong>Repetições:</strong> {exercise.reps}</li>
                                </ul>
                                <button onClick={() => {
                                    setShowExerciseSets(true)
                                    setCurrentExercise(exercise)
                                }}>
                                    Iniciar
                                </button>
                            </div>
                            {index < training.exercises.length - 1 && (
                                <hr style={{ margin: '8px 0' }} />
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )

}

const styles: Record<string, React.CSSProperties> = {

    container: {
        margin: '20px'
    },

    exercisesCard: {
        backgroundColor: '#D7D7D7',
        padding: '12px',
        borderStyle: 'solid',
        borderRadius: '8px',
        borderWidth: '2px',
        borderColor: '#A3A3A3'
    },

    exerciseLine: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

}