import styles from './Mensagem.module.css';

function Mensagem({ naoTemValor, value }) {

    const replaceValue = value && value.replaceAll(',', '');

    return (
        <>
            {naoTemValor && <span className={styles.mensagem} >{value === '' ? 'This file is required' : 'Invalid value'}</span>}
        </>
    )
}

export default Mensagem;