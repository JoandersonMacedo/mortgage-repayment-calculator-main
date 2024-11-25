import Mensagem from '../Mensagem';
import styles from './FieldsetRadio.module.css';
import FieldsetRadioInput from './FieldsetRadioInput';

function FieldsetRadio({ type, onChange, id, legend, inputs, mensage, required = false }) {
    const naoTemValor = (type === 0 || type === '') && mensage ? true : false;

    return (
        <fieldset id={id} required={required} >
            <div className={styles.container} >
                <legend>{legend}</legend>
                <div className={styles.radiosContainer} >
                    {inputs.map(input =>
                        <FieldsetRadioInput
                            key={input.id}
                            type={type}
                            onChange={onChange}
                            id={input.id}
                            value={input.value}
                            label={input.label}
                        />
                    )}
                </div>
                {required &&
                    <aside> <Mensagem naoTemValor={naoTemValor} value={type} /> </aside>}
            </div>
        </fieldset>
    )
}

export default FieldsetRadio;