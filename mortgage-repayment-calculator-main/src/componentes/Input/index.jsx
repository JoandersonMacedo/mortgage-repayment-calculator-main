import styles from './Input.module.css';

function Input({label, type, id, name, required = false}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} required={required} />
            {required && <label htmlFor={id}>This field is required</label>}
        </div>
    )
}

export default Input;