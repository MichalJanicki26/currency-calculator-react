import "./style.css"
import Legend from "./Legend";
import FormParagraph from "./FormParagraph";

const Form = () => (
    <main className="form">
        <fieldset className="form__fieldset">
            <legend>
                <Legend />
            </legend>
            <section>
                <p><FormParagraph
                    firstName="Yen"
                    firstDescription="Yen"
                    secoundDescription="Złoty" />
                </p>
                <p><FormParagraph
                    firstName="Złoty"
                    firstDescription="Złoty"
                    secoundDescription="Yen" />
                </p>
            </section>
        </fieldset>
    </main>
);

export default Form