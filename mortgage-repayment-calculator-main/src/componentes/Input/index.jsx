import Mensagem from '../Mensagem';
import styles from './Input.module.css';

function Input({ value, onChange, format, onBlur, legend, type, id, name, unidade, mensage, unidadeAEsquerda = false, required = false }) {
    // No caso de display grig:
    //const inputContainerStyles = unidadeAEsquerda ? {gridTemplateColumns: 'auto 1fr' } : {gridTemplateColumns: '1fr auto' }
    // No caso de display flex:
    const naoTemValor = (value === '' || value.replaceAll(',', '') == 0) && mensage ? true : false;

    const inputContainerStyles = {};
    inputContainerStyles.border = naoTemValor && '1px solid hsl(4, 69%, 50%)';

    const unidadeStyles = {};
    unidadeStyles.order = unidadeAEsquerda ? -1 : 0;
    unidadeStyles.borderRadius = unidadeAEsquerda ? '6px 0 0 6px' : '0 6px 6px 0';
    unidadeStyles.backgroundColor = naoTemValor && 'hsl(4, 69%, 50%)';
    unidadeStyles.color = naoTemValor && 'hsl(0, 0%, 100%)';

    const inputStyles = {};
    inputStyles.borderRadius = unidadeAEsquerda ? '0 6px 6px 0' : '6px 0 0 6px';

    return (
        <fieldset
            htmlFor={id}
            className={styles.container}>
            <legend
                htmlFor={id}>
                {legend}
            </legend>
            <label
                htmlFor={id}
                style={inputContainerStyles}
                className={styles.inputContainer}
            >
                <input
                    value={value}
                    onChange={event => onChange(format(event.target.value, 2))}
                    onBlur={event => onBlur(event)}
                    type={type}
                    id={id}
                    name={name}
                    style={inputStyles}
                    className={styles.input}
                    autoComplete='off'
                />
                <label
                    htmlFor={id}
                    style={unidadeStyles}
                    className={styles.unidade}
                >
                    {unidade}
                </label>
            </label>
            {required &&
                <aside> <Mensagem naoTemValor={naoTemValor} value={value} /> </aside>}
        </fieldset >
    )
}

export default Input;