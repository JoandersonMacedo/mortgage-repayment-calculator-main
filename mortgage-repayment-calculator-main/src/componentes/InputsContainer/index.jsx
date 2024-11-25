import styles from './InputsContainer.module.css';
import Input from '../Input';
import FieldsetRadio from '../FieldsetRadio';
import Button from '../Button';
import ButtonSvg from '../ButtonSvg';
import { useMortgageCalculatorContext } from '../../hooks/useMortgageCalculatorContext';

function InputsContainer() {

    const
        { amount, setAmount,
            term, setTerm,
            rate, setRate,
            type, setType,
            formatNunber,
            formatNunberBlur,
            mensage,
            inputs,
        } = useMortgageCalculatorContext();

    return (
        <div className={styles.inputsContainer} >
            <Input
                value={amount}
                onChange={setAmount}
                format={formatNunber}
                onBlur={formatNunberBlur}
                legend={inputs.mortgageAmount.legend}
                type={inputs.mortgageAmount.type}
                id={inputs.mortgageAmount.id}
                name={inputs.mortgageAmount.name}
                unidade={inputs.mortgageAmount.unidade}
                unidadeAEsquerda={inputs.mortgageAmount.unidadeAEsquerda}
                required={inputs.mortgageAmount.required}
                mensage={mensage}
            />
            <div className={styles.inputsAgrupamento}>
                <Input
                    value={term}
                    onChange={setTerm}
                    format={formatNunber}
                    onBlur={formatNunberBlur}
                    legend={inputs.mortgageTerm.legend}
                    type={inputs.mortgageTerm.type}
                    id={inputs.mortgageTerm.id}
                    name={inputs.mortgageTerm.name}
                    unidade={inputs.mortgageTerm.unidade}
                    unidadeAEsquerda={inputs.mortgageTerm.unidadeAEsquerda}
                    required={inputs.mortgageTerm.required}
                    mensage={mensage}
                />
                <Input
                    value={rate}
                    onChange={setRate}
                    format={formatNunber}
                    onBlur={formatNunberBlur}
                    legend={inputs.interestRate.legend}
                    type={inputs.interestRate.type}
                    id={inputs.interestRate.id}
                    name={inputs.interestRate.name}
                    unidade={inputs.interestRate.unidade}
                    unidadeAEsquerda={inputs.interestRate.unidadeAEsquerda}
                    required={inputs.interestRate.required}
                    mensage={mensage}
                />
            </div>
            <FieldsetRadio
                type={type}
                onChange={setType}
                id={inputs.mortgageType.id}
                legend={inputs.mortgageType.legend}
                inputs={inputs.mortgageType.inputs}
                required={inputs.mortgageType.required}
                mensage={mensage}
            />
            <Button
                icon={<ButtonSvg />}
                phrasing={'Calculate Repayments'}
            />
        </div>
    )
}

export default InputsContainer;