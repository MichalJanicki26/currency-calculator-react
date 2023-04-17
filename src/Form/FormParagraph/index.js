import "./style.css"

const FormParagraph = ({ firstName, firstDescription, secoundDescription }) => (
    <p className="form__paragraph">
        <label className="form__label">
            <input type="number" step="any" name={firstName} className="form__currency" required
                placeholder="0,00" />
            <span class="form__currencyDescription">{firstDescription}</span>
            <input type="number" step="any" name="result"
                className="form__currency form__currency--moveRight form__currency--moveDown"
                disabled placeholder="0,00" />
            <span className="form__currencyDescription">{secoundDescription}</span>
        </label>
    </p>
);

export default FormParagraph