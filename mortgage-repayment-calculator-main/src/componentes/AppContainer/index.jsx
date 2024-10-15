import Form from "../Form";
import styles from "./AppContainer.module.css";

function AppContainer () {
    return (
        <main>
            <div>
                <div>
                    <h1>Mortgate Calculator</h1>
                    <button type="reset" form="mortgate-calculator" >Clear All</button>
                </div>
                <Form id={"mortgate-calculator"} />
            </div>
        </main>
    )
}

export default AppContainer;