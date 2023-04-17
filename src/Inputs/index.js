import "./style.css"

const Input = () => {
    <label className="form__label">
        <input type="number" min="1" step="any" name="yen" className="js-yen form__currency" required placeholder="0,00"/>
            <span className="form__currencyDescription">Yen</span>
    </label>
};

export default Input