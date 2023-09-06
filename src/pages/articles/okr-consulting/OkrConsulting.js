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

// const jsonLdData = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     mainEntityOfPage: {
//         "@type": "WebPage",
//         "@id": "https://artaxconsulting.com/expert-advice/pakistan-pharmacy-industry",
//     },
//     headline: "Pakistan Pharmacy Business Guide",
//     image: "",
//     author: {
//         "@type": "Person",
//         name: "Muhammad S. Ali, PharmD",
//     },
//     publisher: {
//         "@type": "Organization",
//         name: "",
//         logo: {
//             "@type": "ImageObject",
//             url: "",
//         },
//     },
//     datePublished: "2023-08-16",
// };

export default function PakistanPharmacyIndustry() {
    const { pageFade } = useGlobalContext().animations;
    const { ms, okrConsultingImg1, okrConsultingImg2, okrConsultingImg3 } = localData.images;
    // useJsonLd(jsonLdData);

    useEffect(() => {
        document.title = "OKR Consulting";
    }, []);

    const formRef = useRef(null);
    const { message, send } = localData.svgs;
    const { preloader } = localData.images;

    const { validateComplimentaryChat } = useValidation();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, setState] = useState({
        name: "",
        email: "",
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
            <main className="okr-consulting-page">
                <section className="showcase">
                    <article>
                        <div className="container-sm">
                            <h1 className="showcase-title">
                                Achieving Stellar Objectives: Artax Consulting's Role in OKR Consulting for a
                                Space Technology Company
                            </h1>

                            <em>Written by Unknown</em>
                            <br />
                            <p style={{ fontSize: "16px" }}> Last updated: Aug 16, 2023 • 8 min read</p>
                            <br />

                            <div className="responsive-image">
                                <img src={okrConsultingImg1} alt="" />
                            </div>
                            <br />

                            <p className="showcase-description">
                                In the ever-evolving space technology industry, setting and achieving
                                ambitious objectives is paramount to success. To navigate the challenges of
                                this sector, companies are turning to Objectives and Key Results (OKRs) as a
                                strategic framework. In this article, we explore a hypothetical case study
                                where Artax Consulting, renowned for its expertise in OKR consulting, assists
                                a space technology firm in reaching for the stars.
                            </p>
                            <br />
                            <br />

                            <h2>OKRs in the Space Technology Industry</h2>

                            <p className="showcase-description">
                                Space technology companies face multifaceted challenges, from developing
                                cutting-edge innovations to managing complex missions and staying ahead in a
                                competitive marketplace. OKRs provide a framework that aligns teams, sets
                                clear objectives, and tracks progress toward achieving lofty goals, making
                                them an ideal choice for this dynamic sector.
                            </p>
                            <br />
                            <br />

                            <h2>The Role of OKR Consultants</h2>

                            <div className="responsive-image">
                                <img src={okrConsultingImg2} alt="" />
                            </div>
                            <br />
                            <br />

                            <p className="showcase-description">
                                OKR consultants, like those at Artax Consulting, specialize in helping
                                organizations develop and implement effective OKR strategies. These
                                professionals work closely with companies to define objectives, identify key
                                results, and create a roadmap for success.
                            </p>
                            <br />
                            <br />

                            <h2>The Case Example: SpaceTech Innovations</h2>
                            <p className="showcase-description">
                                Artax Consulting, led by visionary consultants with extensive experience in
                                OKR consulting, initiated a comprehensive assessment of SpaceTech Innovations'
                                existing operations, strategic goals, and market position. This involved
                                engaging with leadership, team members, and stakeholders to gain a deep
                                understanding of the company's vision and aspirations.
                            </p>
                            <br />
                            <br />

                            <h2>Defining Ambitious Objectives</h2>

                            <div className="responsive-image">
                                <img src={okrConsultingImg3} alt="" />
                            </div>
                            <br />
                            <br />

                            <p className="showcase-description">
                                Working collaboratively, the Artax team assisted SpaceTech Innovations in
                                defining ambitious yet attainable objectives. These objectives included
                                launching a new series of satellites, securing key partnerships, and
                                significantly increasing research and development investment to accelerate
                                technological advancements.
                            </p>
                            <br />
                            <br />

                            <h2>Identifying Key Results</h2>
                            <p className="showcase-description">
                                Once the objectives were established, Artax Consulting helped SpaceTech
                                Innovations identify specific key results that would indicate progress toward
                                their goals. This involved quantifiable metrics and milestones, such as the
                                number of satellites successfully launched, revenue growth targets, and the
                                development of breakthrough technologies.
                            </p>
                            <br />
                            <br />

                            <h2>Implementation and Alignment</h2>
                            <p className="showcase-description">
                                With OKRs in place, Artax Consulting supported SpaceTech Innovations in
                                cascading these objectives throughout the organization. They ensured alignment
                                across teams, departments, and individual employees, fostering a shared
                                commitment to achieving the company's ambitious goals.
                            </p>
                            <br />
                            <br />

                            <h2>Results and Benefits</h2>
                            <p className="showcase-description">
                                Over the course of a year, SpaceTech Innovations witnessed remarkable
                                progress. The OKR strategy implemented with the guidance of Artax Consulting
                                enabled the company to stay on track with its satellite launches, secure
                                valuable partnerships with industry leaders, and invest significantly in
                                research and development. As a result, SpaceTech Innovations not only expanded
                                its market presence but also solidified its reputation as a leader in space
                                technology innovation.
                                <br />
                                <br />
                                In the fast-evolving realm of space technology, having a strategic framework
                                like OKRs can be the difference between success and stagnation. Artax
                                Consulting's expertise in OKR consulting empowered SpaceTech Innovations to
                                reach for the stars and achieve ambitious objectives that were once considered
                                out of reach. As the space technology sector continues to evolve, embracing
                                OKRs will remain crucial for companies aiming to push the boundaries of human
                                exploration and technological advancement beyond our planet.
                            </p>
                            <br />
                            <br />

                        </div>
                    </article>
                    <br/>
                    <br/>
                    <br/>

                    <div className="container-sm">

                        <form
                            className={`form contact-form needs-validation ${
                                wasSubmitted ? "was-submitted" : ""
                            }`}
                            ref={formRef}
                            onSubmit={onSubmit}
                        >
                            <h2 className="display-4"  >Request a complimentary chat with Artax's OKR Consultants</h2>
                            <br/>
                            <br/>
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

                            <input
                                type="text"
                                name="message_to_user"
                                defaultValue="You have Requested a complimentary chat with Artax's OKR Consultants"
                                style={{ display: "none" }}
                            />
                            <input
                                type="text"
                                name="message_to_admin"
                                defaultValue="Complimentary chat reques"
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
