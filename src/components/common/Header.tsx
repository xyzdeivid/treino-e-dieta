export default function Header() {

    return (
        <header style={styles.header}>
            <h2>Treino</h2><h2>&</h2><h2>Dieta</h2>
        </header>
    )

}

const styles = {

    header: {
        backgroundColor: '#6b6b6b',
        color: '#fff',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

}