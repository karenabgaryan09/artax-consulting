import React, { useState, useEffect, useRef } from "react";
import { Header, Footer, Button, SmallNavbar, FieldBtn, Modal } from "../../../components";
import localData from "../../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";
import useJsonLd from "../../../hooks/useJsonLd";
import useValidation from "../../../hooks/validation/useValidation";

// HEADER INNER
// function HeaderInner() {
//     return <div className="hero-inner"></div>;
// }

const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://artaxconsulting.com/expert-advice/brazil-space-program",
    },
    headline: "Development of the Brazilian Space Program",
    description: "Beginning and Consolidation of the Brazilian Space Program",
    image: "",
    author: {
        "@type": "Person",
        name: "Maximilian Espuny",
        url: "https://www.researchgate.net/profile/Maximilian-Espuny",
    },
    publisher: {
        "@type": "Organization",
        name: "Artax Consulting",
        logo: {
            "@type": "ImageObject",
            url: "",
        },
    },
    datePublished: "2023-09-07",
};

export default function BrazilSpaceProgram() {
    const { pageFade } = useGlobalContext().animations;
    const { maximilianEspuny, brazilSpaceProgramImg1, brazilSpaceProgramImg2 } = localData.images;
    useJsonLd(jsonLdData);

    useEffect(() => {
        document.title = "Brazil Space Program";
    }, []);

    const formRef = useRef(null);
    const { message, send } = localData.svgs;
    const { preloader } = localData.images;

    const { validateComplimentaryChat } = useValidation();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, setState] = useState({
        name: "",
        email: "",
        company: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target || e;
        setState({ ...state, [name]: value });
    };

    const [result, setResult] = useState({});
    const [errorMessages, setErrorMessages] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const { error } = validateComplimentaryChat(state);

        if (!error) return;
        setWasSubmitted(true);
    };

    useEffect(() => setResult(validateComplimentaryChat(state)), [state]);

    useEffect(() => {
        if (!wasSubmitted) return;
        const errors = {};
        result?.error?.details.forEach((item, index) => {
            if (errors[item.path[0]]) return;
            errors[item.path[0]] = item.message;
        });
        setErrorMessages(errors);
    }, [result, wasSubmitted]);

    const { sendMessageToAdmin, isMessageSending } = useGlobalContext();

    const modalCallback = () => {
        sendMessageToAdmin(formRef.current);
    };

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            {/* <Header title="home" className="hero-pakistan-pharmacy-industry">
                <HeaderInner />
            </Header> */}
            <main className="brazil-space-program-page">
                <section className="showcase">
                    <article>
                        <div className="container-sm">
                            <h1 className="showcase-title">Development of the Brazilian Space Program</h1>

                            <em>
                                Written by{" "}
                                <a href="https://www.researchgate.net/profile/Maximilian-Espuny" target="_blank" className="link-dark" underline="always">
                                    Maximilian Espuny
                                </a>{" "}
                            </em>
                            <br />
                            <p style={{ fontSize: "16px" }}> Last updated: Sep 8, 2023</p>
                            <br />

                            <div className="responsive-image">
                                <img src={brazilSpaceProgramImg1} alt="" />
                            </div>
                            <br />

                            <h2>Beginning and Consolidation of the Brazilian Space Program</h2>
                            <p className="showcase-description">
                                The Brazilian Space Program began in the 1960s through the formation of the
                                Group for the Organization of the National Commission on Space Activities
                                (GOCNAE) in 1961. A decade later, in 1971, the National Institute for Space
                                Research (INPE) and the Department of Research and Development (DEPED) were
                                established. DEPED later evolved into the Institute of Aeronautics and Space
                                (IAE), focusing on the development of space technologies and launch vehicles.
                                <br />
                                <br />
                                In the 1980s, three significant events occurred: the initiation of the
                                Satellite Launch Vehicle Program (VLS), the launch of Brazil's first
                                satellite, and the intensification of international cooperation within the
                                Brazilian space program. The VLS Program commenced in 1984 with the aim of
                                providing Brazil with space autonomy by launching national satellites into
                                orbit. In 1985, Brazil launched its first satellite, named BrasilSat A1.
                                Although it was not manufactured in Brazil (it was built by the American
                                company Hughes), it marked the beginning of satellite communication operations
                                in the country. During the same decade, Brazil amplified its technological
                                development by establishing international cooperation agreements with
                                countries such as the United States and the former Soviet Union.
                                <br />
                                <br />
                                In the 1990s, the most crucial milestones in the Brazilian space program's
                                development were the Data Collection Program (SCD), the inauguration of the
                                Alcântara Launch Center, and partnerships aimed at Earth observation. The SCD
                                program succeeded with the launches of the SCD-1 (1993) and SCD-2 (1998)
                                satellites, designed for environmental data collection and representing a
                                significant technological advancement for Brazil. The Alcântara Launch Center,
                                inaugurated in 1991, began conducting experimental launches and became a
                                strategic facility for the Brazilian space program. Regarding continued
                                partnerships, Brazil developed the Amazonia-1 project in collaboration with
                                China to improve observation of forest cover, deforestation, climate change,
                                and natural disasters.
                            </p>
                            <br />
                            <br />

                            <h2>The Alcântara Disaster and Its Impacts</h2>

                            <p className="showcase-description">
                                Around the turn of the century, the Brazilian space program experienced its
                                most significant setback: the Alcântara accident on August 22, 2003. The
                                Satellite Launch Vehicle (VLS-1 V03) was being prepared for launch in the
                                state of Maranhão. During the preparations, the rocket exploded on its
                                platform, killing 21 people, including engineers and technicians. The VLS-1
                                was a critical project aimed at developing Brazil's autonomous satellite
                                launch capabilities. This event was to be the third test, following two
                                previous failed attempts to reach orbit. The accident led to significant
                                material losses and delayed schedules and plans for future launches, severely
                                affecting the program's reputation. Numerous investigations identified
                                technical failures, deficiencies in safety procedures, lack of qualified
                                training, and inadequate technical design.
                                <br />
                                <br />
                                In response, the Brazilian government reevaluated its entire space program,
                                revising its objectives, strategies, and budget. As a coordinated response to
                                the tragedy, the Brazilian Space Agency (AEB) was established to oversee the
                                coordination and implementation of the space program; the VLS-2, a launch
                                vehicle with superior capabilities to VLS-1, was developed and successfully
                                launched in 2014; and the Amazonia-1B satellite and VLS-3 were developed in
                                partnership with China. Amazonia-1B is scheduled for launch in 2024, aiming to
                                collect data on agriculture, urbanization, and other aspects of Amazon
                                development.
                            </p>
                            <br />
                            <br />

                            <h2>Contributions and Challenges</h2>

                            <div className="responsive-image">
                                <img src={brazilSpaceProgramImg2} alt="" />
                            </div>
                            <br />
                            <br />

                            <p className="showcase-description">
                                Among the current contributions Brazil offers to the space sector, propulsion
                                technologies stand out. Brazil is one of the few countries in the world
                                developing its own technologies, including rockets, satellite engines, and
                                spacecraft engines. These devices can operate on a variety of propellants,
                                including solid and liquid fuels, as well as hybrid propellants. As such,
                                Brazil has emerged as an important supplier of this technology, marketing it
                                to countries like Argentina, China, France, Japan, Portugal, Russia, and
                                Uruguay. Regarding challenges, budget limitations are prominent. In 2022, the
                                budget was around $40 million USD, a small fraction compared to countries like
                                the United States, China, and Russia. This low budget allocation limits the
                                capacity for research, hampers infrastructure maintenance and expansion, and
                                affects the ability to participate in international cooperative space
                                projects. Overcoming this limitation could enable Brazil to emerge as a
                                significant power in the sector internationally.
                            </p>
                            <br />

                            <hr />
                            <br />
                            <br />

                            <h2> Author bio</h2>
                            <p className="showcase-description">
                                <strong>Maximilian Espuny</strong> has a degree in Business Administration
                                from Universidade Paulista (UNIP) in 2005, a specialization in Municipal
                                Public Management from UTFPR in 2017 and a master's degree in Production
                                Engineering from UNESP, and is currently studying for a PhD in Mechanical
                                Engineering at UNESP. He has more than 70 academic publications (including
                                event papers, books and journal articles), with h-index 8 in Scopus and Web of
                                Sciente and h-index 11 in Scholar Google. He was financial manager of a
                                foreign trade company, entrepreneur, managing director and course coordinator
                                of a unit of the Escola Técnica de São Paulo, the largest network of technical
                                courses in Latin America and one of the most recognized in Brazil. He is
                                currently teaching in secondary and technical schools, mainly in project
                                development.
                                {/* <Button
                                 className={`${isBioHidden ? "" : "hidden"}`}
                                 name="read more"
                                 style={{ float: "right" }}
                                 onClick={() => setIsBioHidden(false)}
                             />
                             <br />
                             <br />
                             <span className={`${isBioHidden ? "hidden" : ""}`}>
                                 That’s why Bankrate’s experts rated and reviewed over 250 cards of the top
                                 card offers on the market to create our list of the best credit cards of 2023.
                                 We’ve evaluated each card based on its rewards value, rates and fees, welcome
                                 offers, customer experience, cardholder perks and more to give you a clear
                                 sense of where it shines and where it may fall short. In addition to
                                 Bankrate’s review scores, check out our deep dive into each card to see if
                                 it’s a good fit for your wallet (and pick up pro tips for maximizing its
                                 value).
                                 <br />
                                 <br />
                                 So whether you’re looking for a rewards powerhouse, a money-saving 0-percent
                                 intro APR or a reliable way to build credit, one of these cards from our
                                 partners should be a great fit.
                                 <Button
                                     style={{ marginTop: "10px" }}
                                     name="show less"
                                     onClick={() => setIsBioHidden(true)}
                                 />
                             </span> */}
                            </p>

                            <br />

                            <hr />
                            <br />
                            <br />

                            <img className="showcase-image" src={maximilianEspuny} alt="Maximilian Espuny" />
                            <br />

                            <em>By Maximilian Espuny</em>
                            <br />
                            <br />
                            <br />
                        </div>
                    </article>
                    <br />
                    <br />
                    <br />

                    <div className="container-sm">
                        <form
                            className={`form contact-form needs-validation ${
                                wasSubmitted ? "was-submitted" : ""
                            }`}
                            ref={formRef}
                            onSubmit={onSubmit}
                        >
                            <h2 className="display-4">
                            Request a Complimentary Chat With Artax's Strategy Consultants
                            </h2>
                            <br />
                            <br />
                            <FieldBtn
                                label="Name *"
                                variant="outlined"
                                name="name"
                                errorMessage={errorMessages.name}
                                callback={onChange}
                            />

                            <FieldBtn
                                label="Email *"
                                variant="outlined"
                                name="email"
                                errorMessage={errorMessages.email}
                                callback={onChange}
                            />
                            <FieldBtn
                                label="Company *"
                                variant="outlined"
                                name="company"
                                errorMessage={errorMessages.company}
                                callback={onChange}
                            />

                            <input
                                type="text"
                                name="message_to_user"
                                defaultValue="You have Requested a complimentary chat with Artax's Strategy Consultants"
                                style={{ display: "none" }}
                            />
                            <input
                                type="text"
                                name="message_to_admin"
                                defaultValue="Complimentary chat reques (Strategy Consultants)"
                                style={{ display: "none" }}
                            />
                            {/* <Button variant="contained" color="primary" name="send" endIcon={send} /> */}
                            <br />

                            <Modal
                                preventOpen={validateComplimentaryChat(state).error}
                                title="details"
                                buttonTitle={isMessageSending ? "processing..." : "send"}
                                buttonDisabled={isMessageSending ? true : false}
                                buttonEndIcon={isMessageSending ? <img src={preloader} /> : send}
                                className="modal-dialog-centered"
                                callback={modalCallback}
                            >
                                <div className="form-data-details">
                                    {!Object.keys(state).length
                                        ? "no data"
                                        : Object.keys(state).map((item, index) => {
                                              return (
                                                  <div className="row" key={index}>
                                                      <h6 className="form-data-details-title">{item} :</h6>
                                                      <p className="form-data-details-text">
                                                          {state[item] || "..."}{" "}
                                                      </p>
                                                  </div>
                                              );
                                          })}
                                </div>
                            </Modal>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
