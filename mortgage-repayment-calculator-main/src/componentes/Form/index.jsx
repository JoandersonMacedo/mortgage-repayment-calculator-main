import NoResults from '../NoResults';
import styles from './Form.module.css';
import InputsContainer from '../InputsContainer';
import { useMortgageCalculatorContext } from '../../hooks/useMortgageCalculatorContext';
import Results from '../Results';

function Form({ id }) {

    const {repayment, onSubmit, clearAll} = useMortgageCalculatorContext();

    return (
            <form id={id} onSubmit={event => onSubmit(event)} >
                <div className={styles.container}>
                    <section className={styles.section}>
                        <div className={styles.agrupamento}>
                            <h1 className={styles.titulo}>Mortgate Calculator</h1>
                            <button type="reset" form={id} className={styles.clearAll} onClick={clearAll} >Clear All</button>
                        </div>
                        <InputsContainer />
                    </section>
                    <aside className={styles.aside}>
                        {Object.keys(repayment).length === 0 ? (<NoResults />) : ( <Results />)}
                    </aside>
                </div>
            </form >
    )
}

export default Form;