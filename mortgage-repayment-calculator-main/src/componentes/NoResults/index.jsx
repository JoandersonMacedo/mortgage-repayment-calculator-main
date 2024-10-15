import styles from './NoResults.module.css';
import NoResultsSvg from './NoResultsSvg';

function NoResults() {
    return (
        <div>
            <NoResultsSvg />
            <p>Results shown here</p>
            <p>
                Complete the form and click "calculate repayments" to see what your monthly repayments would be.
            </p>
        </div>
    )
}

export default NoResults;