import styles from './FieldsetRadioInput.module.css';

function FieldsetRadioInput({ id, value, label, type, onChange }) {

    return (
        <label htmlFor={id} className={styles.container}>
            <input
                className={styles.radio}
                type="radio"
                name="fildset-radio"
                id={id}
                value={value}
                checked={type === value}
                onChange={(event) => onChange(event.target.value)}
            />
            <label className={styles.label} htmlFor={id}>{label}</label>
        </label>
    )
}

export default FieldsetRadioInput;