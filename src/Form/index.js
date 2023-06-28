import React, { useState } from "react";
import "./style.css"
import Legend from "./Legend";
import Section from "./Section";

const Form = ({ setResultToYen, roundResultToYen, setResultToZłoty, roundResultToZłoty }) => {

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend>
                    <Legend />
                </legend>
                <section>
                    <Section
                        setResultTo={event => setResultToYen(event.target.value * 0.028425968)}
                        roundResultTo={roundResultToYen}
                        descriptionFrom={"Yen"}
                        descriptionTo={"Złoty"}
                    />
                </section >
                <section>
                    <Section
                        setResultTo={event => setResultToZłoty(event.target.value * 35.179102)}
                        roundResultTo={roundResultToZłoty}
                        descriptionFrom={"Złoty"}
                        descriptionTo={"Yen"}
                    />
                </section >
            </fieldset >
        </form >
    );
};

export default Form