import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => {
/*   const usuario = {        //////// Modo sem uso do props
        nome: 'Fernando Silva',
        avatar: 'https://github.com/FernandoSilvaDev.png'
    }*/

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}> 
                {nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;