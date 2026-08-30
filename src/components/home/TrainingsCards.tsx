import { useContext } from 'react'
import { TrainingsContext } from '../../TrainingsContext'
import { useNavigate } from 'react-router-dom'

export default function TrainingsCards() {

    const { trainings } = useContext(TrainingsContext)
    const navigate = useNavigate()

    return (
        <div style={styles.container}>
            {
                trainings.length > 0 && (
                    trainings.map(training => {
                        return (
                            training.trainingName ?
                                <div style={styles.card}>
                                    <h3>{training.trainingName}</h3>
                                    <ul>
                                        {
                                            training.exercises.map(exercise => {
                                                return (
                                                    <li>- {exercise.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button onClick={() => navigate(`/training-page/${training.id}`)}>Iniciar Treino</button>
                                </div> : null
                        )

                    })
                )
            }
            <button onClick={() => navigate('/new-training')}>Adicionar Treino</button>
        </div>
    )

}

const styles: Record<string, React.CSSProperties> = {

    container: {
        margin: '20px'
    },

    card: {
        marginBottom: '16px',
        backgroundColor: '#D7D7D7',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: '#A3A3A3',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px'
    }

}