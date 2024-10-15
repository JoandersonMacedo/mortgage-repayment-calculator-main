import styles from './Results.module.css'

function Results({ outputFor }) {
    return (
        <div>
            <p>
                Your Results
            </p>
            <p>
                Your results shown below based the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>
            <div>
                <div>
                    <label htmlFor="monthly-repaymants" >Your monthly repayments</label>
                    <output id="monthly-repaymants" htmlFor={outputFor} >2222</output>
                </div>
                <div>
                    <label htmlFor="total" >Total you'll repay over the term</label>
                    <output id="total" htmlFor={outputFor} >2222</output>
                </div>
            </div>
        </div>
    )
}

export default Results;