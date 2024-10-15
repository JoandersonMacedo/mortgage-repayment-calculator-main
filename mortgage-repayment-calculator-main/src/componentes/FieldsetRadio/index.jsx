import styles from './FieldsetRadio.module.css';
import FieldsetRadioInput from './FieldsetRadioInput';

function FieldsetRadio({ id, legend, inputs, required = false }) {
    return (
        <fieldset id={id}>
            <legend>{legend}</legend>
            <input type="radio" name='fildset-radio' required={required} style={{ display: 'none' }} />
            {inputs.map(input =>
                <FieldsetRadioInput
                    id={input.id}
                    value={input.value}
                    label={input.label}
                />
            )}
            {required && <aside>This field is required</aside>}
        </fieldset>
    )
}

export default FieldsetRadio;