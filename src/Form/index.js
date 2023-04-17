import "./style.css"

const Form = ({ legend, paragraph }) => (
    <main className="form">
        <fieldset className="form__fieldset">
            <div className="form__legend">
                {legend}
            </div>
            <section className="section">
                <p>{paragraph}</p>
                <p>{paragraph}</p>
            </section>
        </fieldset>
    </main>
);

export default Form