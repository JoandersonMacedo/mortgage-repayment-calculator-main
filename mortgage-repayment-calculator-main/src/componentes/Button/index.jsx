import styles from './Button.module.css';

function Button({ icon, phrasing }) {

    return (
        <button className={styles.button} type="submit" >
            {icon}
            <span className={styles.phrasing}>{phrasing}</span>
        </button>
    )
}

export default Button;