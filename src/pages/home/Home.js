import React, { useRef, useState, useEffect } from "react";
import {
    Header,
    Footer,
    Navbar,
    Button,
    OurPeopleCard,
    SwiperCarousel,
    Checkbox,
    FieldBtn,
    TextareaBtn,
    Modal,
} from "../../components";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";
import { motion, useScroll, useTransform } from "framer-motion";
import localData from "../../localData";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/validation/useValidation";

// HEADER
function HeaderInner() {
    const { ref: blockRef, inView: heroInView } = useObserver();

    return (
        <div className="hero-inner" ref={blockRef}>
            <div
                className={`container ${heroInView ? "lazy-animate" : ""}`}
                data-lazy="fade-up"
                
                // style={{ transitionDelay: (300 || 1 * 0.1) + "s" }}
            >
                <h1 className="hero-title">
                    <span className="first-half display-2">Strategic Guidance </span>
                    <span className="second-half display-4">For The Age of Digital Transformation</span>
                </h1>
                <a href="#contact">
                    <Button variant="outlined" color="light" name="get in touch" size="lg" />
                </a>
            </div>
        </div>
    );
}

// INFO SECTION
function InfoSectionArtcleTop() {
    const { ref: row1Ref, inView: row1InView } = useObserver();

    const { bgimage6 } = localData.images;

    const { scrollY, scrollYProgress } = useScroll({
        target: row1Ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-20, 80]);
    const bgimage = useTransform(scrollYProgress, [1, 0], [80, -80]);
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);

    return (
        <article className="row row-top" ref={row1Ref}>
            <div className="col col-left">
                <motion.img style={{ y: bgimage }} className="bgImage" src={bgimage6}></motion.img>
            </div>

            <div className="col col-right">
                <div className="container">
                    <div
                        className={`wrapper  ${row1InView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: ".3s" }}
                    >
                        <h6 className="info-sup display-6">Strategic Management</h6>
                        <h2 className="display-3 info-title">
                            {/* Strategic{window.innerWidth > 768 && <br />} Management */}
                            Outside perspective on high value business challenges
                        </h2>
                        <a href="#contact">
                            <Button variant="contained" name="Learn more" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

function InfoSectionArtcleBottom() {
    const { ref: row2Ref, inView: row2InView } = useObserver();

    const { bgimage8 } = localData.images;

    const { scrollY, scrollYProgress } = useScroll({
        target: row2Ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-20, 80]);
    const bgimage = useTransform(scrollYProgress, [1, 0], [80, -80]);
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -70]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 120]);

    return (
        <article className="row row-bottom" ref={row2Ref}>
            <div className="col col-left">
                <motion.img style={{ y: bgimage }} className="bgImage" src={bgimage8}></motion.img>
            </div>

            <div className="col col-right">
                <div className="container">
                    <div
                        className={`wrapper  ${row2InView ? "lazy-animate" : ""}`}
                        data-lazy="fade-up"
                        style={{ transitionDelay: ".3s" }}
                    >
                        <h6 className="info-sup display-6">Enterprise Digital Strategy</h6>
                        <h2 className="display-3 info-title">Innovate, digitize & modernize</h2>
                        <a href="#contact">
                            <Button variant="contained" name="Learn more" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

function InfoSection() {
    return (
        <section className="info" id="info">
            <InfoSectionArtcleTop />
            <InfoSectionArtcleBottom />
        </section>
    );
}
//

// OUR PEOPLE
function OurPeopleSection() {
    const { avatar } = localData.images;
    const { ref: ourPeopleRef, inView: ourPeopleInView } = useObserver();

    const peoples = [
        {
            name: "john doe",
            position: "Senior Partner, London",
            image: avatar,
            biography: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, nihil consequuntur molestias laboriosam id`,
        },
        {
            name: "jane doe",
            position: "Senior Partner, London",
            image: avatar,
            biography: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, nihil consequuntur molestias `,
        },
        {
            name: "jack doe",
            position: "Senior Partner, London",
            image: avatar,
            biography: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, nihil consequuntur molestias laboriosam id harum alias libero ipsa tempore dolores!`,
        },
    ];

    return (
        <section className="our-people" id="our-people">
            <div className="container">
                <h2 className="display-2 our-people-title">our people</h2>
                <div className="card-group our-people-card-group" ref={ourPeopleRef}>
                    <SwiperCarousel
                        items={peoples}
                        Card={OurPeopleCard}
                        options={{
                            spaceBetween: 10,
                            initialSlide: 1,
                            breakpoints: {
                                786: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            },
                        }}
                        rest={{ ourPeopleInView }}
                    />
                    {/* {peoples.map((people, index) => (
                        <OurPeopleCard key={index} {...{ ...people, ourPeopleInView, index }} />
                    ))} */}
                </div>
            </div>
        </section>
    );
}
//

// PARTNERS
function PartnersSection() {
    const { ref: partnersRef, inView: partnersInView } = useObserver();
    const { threeM, petsafe, daimler } = localData.images;
    const partners = [
        { title: "3M Science", icon: threeM },
        { title: "PetSafe", icon: petsafe },
        { title: "Daimler", icon: daimler },
        // { title: "E-commerce", icon: icon1 },
        // { title: "Digital Marketing", icon: icon2 },
        // { title: "Search Engine Optimization (SEO)", icon: icon3 },
        // { title: "Online Reputation Management", icon: icon4 },
        // { title: "Product Management", icon: icon5 },
        // { title: "Strategic Partnerships", icon: icon6 },
        // { title: "Growth Marketing", icon: icon7 },
        // { title: "Business Strategy", icon: icon8 },

        // { isHidden: true },
    ];

    return (
        <section className="partners" id="partners">
            <div className="container">
                <h2 className="display-2 partners-title">Trusted by</h2>
                {/* <p className="partners-description display-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores obcaecati odit quidem voluptates
                    tempore
                </p> */}
                <div className="partner-group" ref={partnersRef}>
                    {partners.map(({ icon }, index) => (
                        <div
                            key={index}
                            className={`partner ${partnersInView ? "lazy-animate" : ""}`}
                            data-lazy="fade-left"
                            style={{ transitionDelay: index * 0.1 + "s" }}
                        >
                            <img src={icon} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
//

// CONTACT
function ContactSection() {
    const formRef = useRef(null);
    const { message, send } = localData.svgs;
    const { preloader } = localData.images;

    const { validateContact } = useValidation();
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [state, setState] = useState({
        name: "",
        email: "",
        surname: "",
        agency: "",
        role: "",
        mobile: "",
        message: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target || e;
        setState({ ...state, [name]: value });
    };

    const [result, setResult] = useState({});
    const [errorMessages, setErrorMessages] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const { error } = validateContact(state);

        if (!error) return;
        setWasSubmitted(true);
    };

    useEffect(() => setResult(validateContact(state)), [state]);

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
        <section className="contact" id="contact">
            <div className="container">
                <div className="details">
                    <h2 className="display-2 details-title">Contact Us</h2>
                    <p className="details-description">
                        Get in touch with us! Together we will find the ideal solution to improve your business. For
                        more information, check our
                        <Link to="/privacy-policy" className="link link-primary privacy-link">
                            Privacy Policy.
                        </Link>
                    </p>

                    <Checkbox checked={true} color="primary" label="I have read and accepted the privacy policy" />

                    <a href="mailto:info@artaxconsulting.com" target="_blank">
                        <Button
                            startIcon={message}
                            name="info@artaxconsulting.com"
                            className="email-btn"
                            variant="contained"
                        />
                    </a>
                </div>
                <form
                    className={`form contact-form needs-validation ${wasSubmitted ? "was-submitted" : ""}`}
                    ref={formRef}
                    onSubmit={onSubmit}
                >
                    <div className="wrapper">
                        <FieldBtn
                            label="Name *"
                            variant="outlined"
                            name="name"
                            errorMessage={errorMessages.name}
                            callback={onChange}
                        />
                        <FieldBtn
                            label="Surname *"
                            variant="outlined"
                            name="surname"
                            errorMessage={errorMessages.surname}
                            callback={onChange}
                        />
                        <FieldBtn
                            label="Agency *"
                            variant="outlined"
                            name="agency"
                            errorMessage={errorMessages.agency}
                            callback={onChange}
                        />
                        <FieldBtn
                            label="Role *"
                            variant="outlined"
                            name="role"
                            errorMessage={errorMessages.role}
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
                            label="Mobile *"
                            variant="outlined"
                            className="mobile"
                            name="mobile"
                            errorMessage={errorMessages.mobile}
                            callback={onChange}
                        />
                        <TextareaBtn
                            label="Your message"
                            variant="outlined"
                            className="message"
                            name="message"
                            errorMessage={errorMessages.message}
                            callback={onChange}
                        />
                        <input
                            type="text"
                            name="message_to_user"
                            defaultValue="Thank you for sending your application to artaxconsulting.com"
                            style={{ display: "none" }}
                        />
                    </div>
                    {/* <Button variant="contained" color="primary" name="send" endIcon={send} /> */}

                    <Modal
                        preventOpen={validateContact(state).error}
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
                                              <p className="form-data-details-text">{state[item] || "..."} </p>
                                          </div>
                                      );
                                  })}
                        </div>
                    </Modal>
                </form>
            </div>
            {/* <div className="circle circle-primary circle-lg "></div>
            <div className="circle circle-success"></div> */}
        </section>
    );
}
//

export default function Home() {
    const { pageFade } = useGlobalContext().animations;

    useEffect(() => {
        document.title = "Global Management Consulting | Artax";
    }, []);
    return (
        <motion.div {...pageFade}>
            <Header title="home">
                <Navbar />
                <HeaderInner />
            </Header>
            <main className="home-page">
                <InfoSection />
                {/* <OurPeopleSection /> */}
                <PartnersSection />
                <ContactSection />
            </main>
            <Footer />
        </motion.div>
    );
}
