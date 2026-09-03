import type { Exercise } from '../../types'

export default function ExercisesSets({ exercise }: { exercise: Exercise }) {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div>
                    <h3>Exercício: {exercise.name}</h3>
                    <h3>Séries: {exercise.sets}</h3>
                    <h3>Repetições: {exercise.reps}</h3>
                </div>
                <hr style={styles.hr} />
                <h3>Série Atual: 1</h3>
                <button style={styles.button}>Próxima Série</button>
            </div>
        </div >
    )
}

const styles: Record<string, React.CSSProperties> = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999
    },
    card: {
        backgroundColor: '#fff',
        padding: '24px',
        borderRadius: '8px',
        minWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column'
    },
    hr: {
        width: '100%',
        margin: '16px 0',
    },
    button: {
        marginTop: '20px'
    }
}