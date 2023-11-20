import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components";
import emailjs from "@emailjs/browser";
import { useGlobalContext } from "../../../../context";

export default function SeoSection() {
    const myForm = useRef();

    const [result, setResult] = useState(null);
    const { sendMessageToAdmin, successAlert, errorAlert, isMessageSending } = useGlobalContext();

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

                setTimeout(() => {
                    const output = document.querySelector(".seo #output");
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

    useEffect(() => {
        const button = document.querySelector(".seo .seo-btn");
        let toEmail = document.querySelector(".seo #toEmail");
        var validate = function () {
            try {
                var input = document.querySelectorAll(".seo input.awesomeInput"),
                    validCount = 0,
                    i;
                for (i = 0; i < input.length; i++) {
                    var currentInputId = document.querySelector(".seo #" + input[i].id);

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
                if (document.querySelector(".seo .errorInput")) setResult(null);

                if (validCount === 4) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                setResult(null);
                console.log("Failed to validate, check yo self");
            }
        };

        var calcualte = function (searchVolume, position, conversion, avgOrderValue) {
            try {
                var postionValue = _getPersentage(position),
                    output = document.querySelector(".seo #output"),
                    volumePosition,
                    volumePositionOrganic,
                    volumePositionOrganicOrder;

                // calculation One
                volumePosition = (searchVolume / 100) * postionValue;
                output.innerHTML = "enter email";
                //  "<p>calculation One | searchVolume/100 * position = " + volumePosition;

                // calculation Two
                volumePositionOrganic = (volumePosition / 100) * conversion;
                output.innerHTML = "enter email";
                // "<p>calculation Two | (calculation One/100) * conversion = " + volumePositionOrganic;

                // calculation Three
                volumePositionOrganicOrder = volumePositionOrganic * avgOrderValue;
                // output.innerHTML = '$'+ volumePositionOrganicOrder.toFixed();
                document.querySelector(".seo .send_result").value =
                    "$" + volumePositionOrganicOrder.toFixed();
                setResult("hidden");
            } catch (e) {
                toEmail.classList.add("hidden");

                console.log("Failed to calcualte, did you do something stupid?");
            }
        };

        var _getPersentage = function (position) {
            var positionValueTable = {
                    1: 30,
                    2: 13,
                    3: 9.5,
                    4: 6.5,
                    5: 5,
                    6: 4,
                    7: 3,
                    8: 2.5,
                    9: 2.2,
                    10: 2,
                },
                positionValue;

            if (position <= 10) {
                positionValue = positionValueTable[position];
            } else if (position > 10 && position < 22) {
                positionValue = 0.5;
            } else if (position > 22 && position < 31) {
                positionValue = 0.05;
            } else {
                positionValue = 0;
            }

            return positionValue;
        };
        if (button) {
            button.addEventListener("click", () => {
                var searchVolume = document.querySelector(".seo input#searchVolume").value,
                    position = document.querySelector(".seo input#position").value,
                    conversion = document.querySelector(".seo input#conversion").value,
                    avgOrderValue = document.querySelector(".seo input#avgOrderValue").value;
                var isValid = validate();

                if (isValid === true) {
                    calcualte(searchVolume, position, conversion, avgOrderValue);
                } else {
                    const output = document.querySelector(".seo #output");
                    if (output) output.innerText = "Each field needs a number";
                }
            });
        }
    }, []);
    return (
        <section className="seo">
            <div className="container">
                <div className="seo-calculator-content">
                    <h1 className="seo-title">SEO keyword ROI value calculator</h1>

                    <form className="form" ref={myForm} onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            id="searchVolume"
                            className="field awesomeInput "
                            name="volume"
                            placeholder="Search Volume (per month)"
                        />
                        <input
                            type="text"
                            id="position"
                            className="field awesomeInput "
                            name="position"
                            placeholder="Position (1-100)"
                        />
                        <input
                            type="text"
                            id="conversion"
                            className="field awesomeInput "
                            name="conversion"
                            placeholder="Organic Conversion (Percentage)"
                        />
                        <input
                            type="text"
                            id="avgOrderValue"
                            className="field awesomeInput "
                            name="value"
                            placeholder="Average Order Value ($)"
                            style={{ marginBottom: "2rem" }}
                        />

                        <input
                            type="text"
                            className="field"
                            name="from_email"
                            defaultValue="info@jonathanposton.com"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="send_result"
                            className="send_result"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_1"
                            defaultValue="Your estimated monthly keyword revenue ="
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            name="value_2"
                            defaultValue="Contact us to create a growth strategy to win more search share for this keyword."
                            style={{ display: "none" }}
                        />

                        <Button variant="contained" color="dark" size="xl" className="seo-btn">
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

                <div className="embed-calculator">
                    <p className="embed-calculator-description">
                        This SEO keyword ROI value calculator requires inputs of monthly search volume,
                        position, organic conversion rate, average order value in dollars, and it will
                        calculate the revenue value of your SEO keywords.
                    </p>
                    <br />
                    <br />

                    <p className="embed-calculator-text">
                        *Disclaimer:  this tool may or may not be accurate as every business case is different.
                    </p>
                </div>
            </div>
        </section>
    );
}
