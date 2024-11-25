import { createContext, useState } from "react";

export const MortgageCalculatorContext = createContext();

export function MortgageCalculatorProvider({ children }) {

    const [amount, setAmount] = useState('')
    const [term, setTerm] = useState('');
    const [rate, setRate] = useState('');
    const [type, setType] = useState('');
    const [repayment, setRepayment] = useState({});
    const [mensage, setMensage] = useState(false);

    const mortgageTypes = {
        REPAYMENT: 'repayment',
        INTEREST_ONLY: 'interest-only',
        eMortgageType (type) {
            return type === this.INTEREST_ONLY || type === this.REPAYMENT;
        }
    }

    const inputs = {
        mortgageAmount: {
            legend: 'Mortgage Amount',
            type: 'text',
            id: 'mortgage-amount',
            name: 'mortgage-amount',
            unidade: '£',
            unidadeAEsquerda: true,
            required: true, 
            min: 1,
            max: '',
        },
        mortgageTerm: {
            legend: 'Mortgage Term',
            type: 'text',
            id: 'mortgage-term',
            name: 'mortgage-term',
            unidade: 'years',
            unidadeAEsquerda: false,
            required: true,
            min: 1,
            max: 99,
        },
        interestRate: {
            legend: 'Interest Rate',
            type: 'text',
            id: 'interest-rate',
            name: 'interest-rate',
            unidade: '%',
            unidadeAEsquerda: false,
            required: true,
            min: 1,
            max: 100,
        },
        mortgageType: {
            id: 'mortgage-type',
            legend: 'Mortgage Type',
            inputs: [{
                id: 'repayment',
                value: mortgageTypes.REPAYMENT,
                label: 'Repayment',
                type: type,
            },
            {
                id: 'interest-only',
                value: mortgageTypes.INTEREST_ONLY,
                label: 'Interest Only',
                type: type,
            }],
            required: true
        }
    }

    const outputFor = `${inputs.mortgageAmount.id} ${inputs.mortgageTerm.id} ${inputs.interestRate.id} ${inputs.mortgageType.id}`;

    return (
        <MortgageCalculatorContext.Provider
            value={{
                amount, setAmount,
                term, setTerm,
                rate, setRate,
                type, setType,
                repayment, setRepayment,
                mensage,setMensage,
                mortgageTypes,
                inputs,
                outputFor
            }}
        >
            {children}
        </MortgageCalculatorContext.Provider>
    )
}