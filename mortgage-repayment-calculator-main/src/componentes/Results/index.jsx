import { useMortgageCalculatorContext } from '../../hooks/useMortgageCalculatorContext';
import styles from './Results.module.css';

function Results() {
    const {repayment, outputFor, formatNunber} = useMortgageCalculatorContext();

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Your Results
            </h3>
            <p className={styles.instrucoes}>
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>
            <div className={styles.results}>
                <div className={styles.monthlyRepayments}>
                    <label htmlFor="monthly-repaymants" >Your monthly repayments</label>
                    <output onChange={event => formatNunber(event.target.value)} id="monthly-repaymants" htmlFor={outputFor} >{`£${repayment.monthly}`}</output>
                </div>
                <hr/>
                <div className={styles.total}>
                    <label htmlFor="total" >Total you'll repay over the term</label>
                    <output id="total" htmlFor={outputFor} >{`£${repayment.total}`}</output>
                </div>
            </div>
        </div>
    )
}

export default Results;