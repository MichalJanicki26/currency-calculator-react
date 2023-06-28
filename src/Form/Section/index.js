import "./style.css"

const Section = ({ setResultTo, roundResultTo, descriptionFrom: descriptionCurrencyFrom, descriptionTo }) => {

    return (
        <>
            <p className="form__paragraph">
                <label className="form__label">
                    <input
                        className="form__currency"
                        step={0.01}
                        type="number"
                        onChange={setResultTo}
                        placeholder={0.00}
                    />
                    <span className="form__currencyDescription">{descriptionCurrencyFrom}</span>

                    <input
                        className="form__currency form__currency--moveRight form__currency--moveDown"
                        disabled
                        step={0.01}
                        type="number"
                        value={roundResultTo}
                        placeholder={0.00}
                    />
                    <span className="form__currencyDescription">{descriptionTo}</span>

                </label>
            </p>
        </>
    );
};

export default Section