import ExerciseInput from "../components/newTrainingPage/ExerciseInput"

export default function NewTrainingPage() {

    return (
        <div style={styles.container}>
            <div>
                <label>Nome do Treino:</label>
                <input style={{ marginLeft: '4px' }} type="text" />
            </div>
            <hr style={{ margin: '20px auto', width: '80%' }} />
            <ExerciseInput />
            <ExerciseInput />
            <ExerciseInput />
            <ExerciseInput />
            <hr style={{ margin: '20px auto', width: '80%' }} />
            <button>Criar Treino</button>
        </div>
    )

}

const styles = {

    container: {
        margin: '16px 12px'
    }

} as const