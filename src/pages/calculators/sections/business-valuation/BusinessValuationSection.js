import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../../../../context";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Button } from "../../../../components";

export default function BusinessValuationSection() {
    const myForm = useRef();
    useEffect(() => {
        document.title = "Business Valuation calculator";
    }, []);

    const [result, setResult] = useState(null);
    const [categoryCount, setCategoryCount] = useState(null);
    const [typeCount, setTypeCount] = useState(null);

    const { sendMessageToAdmin, successAlert, errorAlert, isMessageSending } = useGlobalContext();

    const handleCalc = () => {
        if (!categoryCount || !typeCount) {
            setTimeout(() => {
                errorAlert(`error: Please fill out the required fields`);
            }, 100);
            return;
        }
        const res = "$" + (parseFloat(categoryCount) * parseFloat(typeCount)).toFixed();

        setResult(res);
    };

    const onSubmitHandler = (e) => {
        if (result) sendEmail();
    };

    const sendEmail = () => {
        emailjs.sendForm("service_6fbyiy3", "template_o4yehwt", myForm.current, "Nyfe0gSIb8TlPNiVB").then(
            (result) => {
                setResult(null);

                setTimeout(() => {
                    const output = document.querySelector(".business-valuation #output");
                    output.innerHTML = "";
                }, 100);
                successAlert("message sent");
            },
            (error) => {
                // alert("error: email required");
                errorAlert(`error: email required`);
            }
        );
    };

    return (
        <section className="business-valuation">
            <div className="container">
                <div className="business-valuation-content">
                    <div className="wrapper">
                        <h1 className="business-valuation-title">Business Valuation calculator</h1>
                    </div>
                    <form className="form" ref={myForm} onSubmit={(e) => e.preventDefault()}>
                        <div className="legend">
                            <div className="wrapper form-calculator">
                                <div className="form-group">
                                    <label htmlFor="annual-profit" className="form-label">
                                        Enter your business’s annual profit
                                    </label>
                                    <input
                                        type="number"
                                        id="annual-profit"
                                        className="form-control field"
                                        placeholder="annual profit"
                                        onInput={(e) => setCategoryCount(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="form-label">
                                        Select your business category which corresponds with a multiplier value to
                                        calculate an estimate of your business value.
                                    </label>
                                    <div className="select" onChange={(e) => setTypeCount(e.target.value)}>
                                        <select name="" id="" required defaultValue="Select" className="field">
                                            <option value="Select" disabled>
                                                Select
                                            </option>
                                            <option value="3.17">Agriculture, Forestry and Fishing</option>
                                            <option value="4.48">Construction</option>
                                            <option value="6.84">Finance, Insurance and Real Estate</option>
                                            <option value="7.65">Manufacturing</option>
                                            <option value="4.15">Retail Trade</option>
                                            <option value="6.7">Services</option>
                                            <option value="5.79">Wholesale Trade</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">
                                    Click the calculate button to get the results emailed to you instantly.
                                </label>
                                <Button
                                    variant="contained"
                                    color="dark"
                                    size="xl"
                                    className="business-valuation-btn"
                                    onClick={handleCalc}
                                >
                                    calculate
                                </Button>
                                <div id="output"></div>
                            </div>
                        </div>
                        <div className={`form-group form-group-mail ${!result ? "hidden" : ""}`}>
                            <input
                                type="text"
                                className="field"
                                id="toEmail"
                                name="email"
                                placeholder="enter your email to receive the results."
                            />
                            <Button
                                disabled={isMessageSending}
                                variant="contained"
                                color="primary"
                                onClick={() => onSubmitHandler()}
                            >
                                send
                            </Button>
                        </div>

                        <input
                            type="text"
                            className="field"
                            name="from_email"
                            defaultValue="jonathanposton09@gmail.com"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="send_result"
                            defaultValue={result}
                            className="send_result"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_1"
                            defaultValue="The estimated value of your business is"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_2"
                            defaultValue="The true value may vary wildly based on how long your business has been in operation, what risks and liabilities exist, and even how the buyer perceives the value of your business."
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_3"
                            defaultValue="To talk with a business growth specialist about how to look at possible ways to increase
                                profits and eliminate costs for the purposes of increasing the value of your business,
                                contact info@jonathanposton.com to set up a time to meet with Jonathan Poston LLC."
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_4"
                            defaultValue="*Disclaimer: this calculator is not intended to be used for legal purposes or to
                                establish an accurate business value for any real life situation. Use a lawyer or
                                business appraisal expert for that. Artax Consulting is not liable for any inaccuracies."
                            style={{ display: "none" }}
                        />

                        <div id="output"></div>
                    </form>
                </div>

                <div className="embed-calculator">
                    <p className="embed-calculator-description">
                        Use this simple business valuation calculator to get an idea of what your business is worth. It
                        is based on a price earnings ratio method which takes your annual business profits and
                        multiplies it with the P/E ratio. In this case, the multiplier is based on EBITDA.
                    </p>
                    <br />
                    <br />
                    <p className="embed-calculator-description">
                        The source used for the multiplier is an abbreviated version of data originally provided by INC
                        Magazine and found{" "}
                        <a target="_blank" className="link link-primary" href="https://www.orioncg.com/multiplier.php">
                            here
                        </a>{" "}
                        The multiplier is EBITDA which may be similar to the P/E.
                    </p>
                    <br />
                    <br />
                    <p className="embed-calculator-text">
                        *Disclaimer: this calculator is not intended to be used for legal purposes or to establish an
                        accurate business value for any real life situation. Use a lawyer or business appraisal expert
                        for that. Artax Consulting is not liable for any inaccuracies.
                    </p>
                </div>
            </div>
        </section>
    );
}
