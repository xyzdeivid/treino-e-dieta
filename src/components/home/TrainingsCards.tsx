import { useContext } from 'react'
import { TrainingsContext } from '../../TrainingsContext'

export default function TrainingsCards() {

    const { trainings } = useContext(TrainingsContext)

    return (
        <div>
            {
                trainings.length > 0 && (
                    trainings.map(training => {
                        return (
                            <div style={styles.container}>
                                <h3 style={styles.trainingName}>Treino: {training.trainingName}</h3>
                                <div style={styles.exercisesCards}>
                                    <div>
                                        {training.exercises.map((exercise, index) => {
                                            const isLast = index === training.exercises.length - 1
                                            return (
                                                <div key={index}>
                                                    <div style={styles.exerciseLine}>
                                                    <ul>
                                                        <li><strong>Nome:</strong> {exercise.name}</li>
                                                        <li><strong>Séries:</strong> {exercise.sets}</li>
                                                        <li><strong>Repetições:</strong> {exercise.reps}</li>
                                                    </ul>
                                                    <button>Iniciar</button>
                                                    </div>
                                                    {!isLast && <hr style={styles.hr} />}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )

                    })
                )
            }
        </div>
    )

}

const styles = {

    container: {
        margin: '16px',
        borderWidth: '1px',
        borderColor: 'black'
    },

    trainingName: {
        margin: '16px 0'
    },

    exercisesCards: {
        backgroundColor: '#D7D7D7',
        padding: '8px',
        borderRadius: '8px'
    },

    exerciseLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    hr: {
        margin: '8px 0'
    }

} as const