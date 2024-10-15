import Button from '../Button';
import ButtonSvg from '../ButtonSvg';
import FieldsetRadio from '../FieldsetRadio';
import Input from '../Input';
import NoResults from '../NoResults';
import Results from '../Results';
import styles from './Form.module.css';

function Form({ id }) {
    const fildsetInputs =
        [{
            id: 'repayment',
            value: 'repayment',
            label: 'Repayment',
        },
        {
            id: 'interest-only',
            value: 'interest-only',
            label: 'Interest Only',
        }]

    return (
        <form id={id}>
            <Input
                label={'Mortgage Amount'}
                type={'nunber'}
                id={'mortgage-amount'}
                name={'mortgage-amount'}
                required={true}
            />
            <Input
                label={'Mortgage Term'}
                type={'nunber'}
                id={'mortgage-term'}
                name={'mortgage-term'}
                required={true}
            />
            <Input
                label={'Interest Rate'}
                type={'nunber'}
                id={'interest-rate'}
                name={'interest-rate'}
                required={true}
            />
            <FieldsetRadio
                id={'mortgage-type'}
                legend={'Mortgage Type'}
                inputs={fildsetInputs}
                required={true}
            />
            <Button
                icon={<ButtonSvg />}
                phrasing={'Calculate Repayments'}
            />
            <aside>
                <NoResults />
                <Results
                    outputFor={'monthly-repaymants mortgage-amount interest-rate mortgage-type'}
                />
            </aside>
        </form>
    )
}

export default Form;