import styles from './FieldsetRadioInput.module.css';

function FieldsetRadioInput({id, value, label}) {
    return (
        <>
            <input type="radio" name="fildset-radio" id={id} value={value} />
            <label htmlFor="repayment">{label}</label>
        </>
    )
}

export default FieldsetRadioInput;