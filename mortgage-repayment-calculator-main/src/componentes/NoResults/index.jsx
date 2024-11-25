import styles from './NoResults.module.css';
import NoResultsSvg from './NoResultsSvg';

function NoResults() {
    return (
        <div className={styles.container}>
            <NoResultsSvg />
            <p className={styles.pLarge}>Results shown here</p>
            <p className={styles.pSmall}>
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default NoResults;