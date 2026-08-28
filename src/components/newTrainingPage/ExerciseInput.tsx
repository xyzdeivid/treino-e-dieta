export default function ExerciseInput() {

    return (
        <div style={styles.container}>
            <input style={styles.nameInput} type="text" placeholder="Exercício" />
            <input style={styles.numberInput} type="number" placeholder="Séries" />
            <input style={styles.numberInput} type="number" placeholder="Repetições" />
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