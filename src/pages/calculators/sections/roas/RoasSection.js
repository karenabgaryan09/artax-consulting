import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../../../context";
import emailjs from "@emailjs/browser";
import { Button } from "../../../../components";

export default function RoasSection() {
    const myForm = useRef();

    const { sendMessageToAdmin, successAlert, errorAlert, isMessageSending } = useGlobalContext();

    useEffect(() => {
        document.title = "ROAS Calculator";
    }, []);

    const [result, setResult] = useState(null);

    const onSubmitHandler = (e) => {
        // const { decodedForm } = globalOnSubmitHandler(form, setForm);

        // if (!decodedForm) return setIsSubmitted(true);
        if (!result) return;
        sendEmail();
    };

    const sendEmail = () => {
        emailjs.sendForm("service_6fbyiy3", "template_o4yehwt", myForm.current, "Nyfe0gSIb8TlPNiVB").then(
            (result) => {
                setResult(null);
                successAlert("message sent");
                setTimeout(() => {
                    const output = document.querySelector(".roas #output");
                    output.innerHTML = "";
                }, 100);
            },
            (error) => {
                // alert("error: email required");
                errorAlert(`error: email required`);
            }
            // (result) => {
            //     setResult(null);

            //     setTimeout(() => {
            //         const output = document.querySelector("#output");
            //         output.innerHTML = "";
            //     }, 100);
            //     successAlert("message sent");
            // },
            // (error) => {
            //     // alert("error: email required");
            //     errorAlert(`error`);
            // }
        );
    };

    useEffect(() => {
        const button = document.querySelector(".roas-btn");
        let toEmail = document.querySelector(".roas #toEmail");
        var validate = function () {
            try {
                var input = document.querySelectorAll(".roas input.awesomeInput"),
                    validCount = 0,
                    i;
                for (i = 0; i < input.length; i++) {
                    var currentInputId = document.querySelector(".roas" + " #" + input[i].id);

                    if (currentInputId.value > 0) {
                        currentInputId.classList.add("valid");
                        currentInputId.classList.remove("errorInput");
                        validCount++;
                    } else {
                        currentInputId.classList.add("errorInput");
                        currentInputId.classList.remove("valid");
                        validCount--;
                    }
                }
                if (document.querySelector(".roas .errorInput")) setResult(null);

                if (validCount === 2) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                setResult(null);
                console.log("Failed to validate, check yo self");
            }
        };

        var calcualte = function (revenue, advertising) {
            try {
                var output = document.querySelector(".roas #output");

                // calculation One
                output.innerHTML = "enter email";
                //  "<p>calculation One | searchVolume/100 * position = " + volumePosition;

                // calculation Two
                // output.innerHTML = "enter email";
                // "<p>calculation Two | (calculation One/100) * conversion = " + volumePositionOrganic;

                // calculation Three
                var calc = (revenue / advertising) * 100;
                // output.innerHTML = calc.toFixed();
                document.querySelector(".roas .send_result").value = calc.toFixed() + "%";
                setResult("hidden");
            } catch (e) {
                toEmail.classList.add("hidden");

                console.log("Failed to calcualte, did you do something stupid?");
            }
        };

        if (button) {
            button.addEventListener("click", () => {
                var revenue = document.querySelector(".roas input#revenue").value,
                    advertising = document.querySelector(".roas input#advertising").value;

                var isValid = validate();

                if (isValid === true) {
                    calcualte(revenue, advertising);
                } else {
                    const output = document.querySelector(".roas #output");
                    if (output) output.innerText = "Each field needs a number";
                }
            });
        }
    }, []);
    return (
        <section className="roas">
            <div className="container">
                <h1 className="roas-title">ROAS Caclulator</h1>

                <form className="form" ref={myForm} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        id="revenue"
                        className="field awesomeInput "
                        name="revenue"
                        placeholder="revenue from ads"
                    />
                    <input
                        type="text"
                        id="advertising"
                        className="field awesomeInput "
                        name="advertising"
                        placeholder="cost of advertising"
                        style={{ marginBottom: "2rem" }}
                    />

                    <input
                        type="text"
                        className="field"
                        name="from_email"
                        defaultValue="info@jonathanposton.com"
                        style={{ display: "none" }}
                    />
                    <input type="text" name="send_result" className="send_result" style={{ display: "none" }} />
                    <input type="text" name="value_1" defaultValue="Your ROAS is" style={{ display: "none" }} />
                    <input
                        type="text"
                        name="value_2"
                        defaultValue={`If your ROAS is less than 800% then there may be room for improvement.
                                Contact us to look at ways of improving your ROAS.`}
                        style={{ display: "none" }}
                    />

                    <Button variant="contained" color="dark" size="xl" className="roas-btn">
                        calculate
                    </Button>
                    <div id="output"></div>
                    <div className={`form-group ${!result ? "hidden" : ""}`}>
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
                </form>
            </div>
        </section>
    );
}
