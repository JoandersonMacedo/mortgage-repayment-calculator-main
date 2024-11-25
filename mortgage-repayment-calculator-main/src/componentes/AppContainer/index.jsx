import { MortgageCalculatorProvider } from "../../contexts/MortgageCalculatorContext";
import Form from "../Form";
import styles from "./AppContainer.module.css";

function AppContainer() {
    return (
        <main>
            <div className={styles.main}>
                <MortgageCalculatorProvider>
                    <Form id={"mortgate-calculator"} />
                </MortgageCalculatorProvider>
            </div>
        </main>
    )
}

export default AppContainer;