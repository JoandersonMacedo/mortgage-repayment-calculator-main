import styles from './Button.module.css';

function Button({ icon, phrasing }) {
    return (
        <button type="submit" >
            {icon}
            <span>{phrasing}</span>
        </button>
    )
}

export default Button;