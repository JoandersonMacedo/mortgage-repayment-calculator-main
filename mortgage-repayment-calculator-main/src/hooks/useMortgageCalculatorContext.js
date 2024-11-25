import { useContext } from "react";
import { MortgageCalculatorContext } from "../contexts/MortgageCalculatorContext";
import { interestOnlyCalculator, repaymentCalculator } from "../utils/mortgageCalculator";

export function useMortgageCalculatorContext() {
    const {
        amount, setAmount,
        term, setTerm,
        rate, setRate,
        type, setType,
        repayment, setRepayment,
        mensage, setMensage,
        inputs,
        mortgageTypes,
        outputFor
    } = useContext(MortgageCalculatorContext);

    function formatNunber(string, decimais = null) {
        const regex = decimais === 0 ? /[\d]/ : /[\d\.]/;
        const nunber = string.split('').filter(char => regex.test(char));
        const tamanho = nunber.length;
        const posicaoDoPonto = nunber.includes('.') ? nunber.indexOf('.') : tamanho;
        const primeiraVirgula = posicaoDoPonto > 3 ? posicaoDoPonto % 3 : 0;
        
        let posicao = 0;
        let contador = 1
        let contadorDecimais = 1;
        while(contador <= tamanho) {
            if(contador === 1 && tamanho === 1 && !(/[1-9]/.test(nunber[posicao]))) {
                nunber[posicao] = '';
                break;
            } 
            if (posicao === posicaoDoPonto) {
                posicao++;
                contador++;
                while (contador <= tamanho) {
                    if(!(/[\d]/.test(nunber[posicao]))) {
                        nunber[posicao] = '';
                    }
                    if(decimais !== null && contadorDecimais > decimais) {
                        nunber[posicao] = '';
                    }
                    posicao++;
                    contador++;
                    contadorDecimais++;
                }
                break;
            }
            if(contador !== posicaoDoPonto && posicaoDoPonto > 3) {
                if(contador === primeiraVirgula) {
                    nunber[posicao] += ',';
                }
                if(contador >= 3 && (contador - primeiraVirgula) % 3 === 0) {
                    nunber[posicao] += ',';
                }
            }

            posicao++;
            contador++;
        }

        return nunber.join('');
    }

    function formatNunberBlur(event) {
        event.target.value = event.target.value.replace(/\.$/m, '')
    }

    function onSubmit(event) {
        event.preventDefault();

        const nAmount = parseFloat(amount.replaceAll(',', ''));
        const nTerm = parseFloat(term.replaceAll(',', ''));
        const nRate = parseFloat(rate.replaceAll(',', ''));

        if (nAmount > 0 && nTerm > 0 && nRate > 0 && mortgageTypes.eMortgageType(type)) {
            switch (type) {
                case mortgageTypes.INTEREST_ONLY:
                    setRepayment({
                        monthly: formatNunber(interestOnlyCalculator(nAmount, nTerm, nRate).monthlyRepayments.toString()),
                        total: formatNunber(interestOnlyCalculator(nAmount, nTerm, nRate).totalRepayment.toString()),
                    });
                    break;
                case mortgageTypes.REPAYMENT:
                    
                    setRepayment({
                        monthly: formatNunber(repaymentCalculator(nAmount, nTerm, nRate).monthlyRepayments.toString()),
                        total: formatNunber(repaymentCalculator(nAmount, nTerm, nRate).totalRepayment.toString()),
                    });
                    break;
                default:
                    setRepayment({})
            }
            setMensage(false)
        } else {
            setMensage(true)
        }
    }

    function clearAll() {
        setAmount('');
        setTerm('');
        setRate('');
        setType('');
        setMensage(false)
    }

    return {
        amount, setAmount,
        term, setTerm,
        rate, setRate,
        type, setType,
        repayment, setRepayment,
        mensage, setMensage,
        formatNunber,
        formatNunberBlur,
        inputs,
        outputFor,
        onSubmit,
        clearAll
    }
}