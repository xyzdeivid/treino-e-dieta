import { useNavigate } from 'react-router-dom'

export default function NoContentWarning() {

    const navigate = useNavigate()

    return (
        <div style={styles.container}>
            <h4>Ainda não há treinos salvos!</h4>
            <button
                onClick={() => navigate('/new-training')}
            >
                Adicionar treino
            </button>
        </div>
    )

}

const styles = {

    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    }

} as const