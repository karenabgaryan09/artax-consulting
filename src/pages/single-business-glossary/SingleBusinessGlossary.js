import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function SingleBusinessGlossary() {
    const { pageFade } = useGlobalContext().animations;
    const { businessGlossaryData } = useGlobalContext();
    const [state, setState] = useState({});
    const { preloader } = localData.images;

    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(businessGlossaryData).length === 0) return;
        setState(businessGlossaryData[params.slug] || {});
        const slug = businessGlossaryData[params.slug]
        if(slug) return 
        navigate('/business-glossary')
    }, [businessGlossaryData]);

    useEffect(() => {
        if (!state.metaTitle) return;
        document.title = state.metaTitle || "Global Management Consulting | Artax";

        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.content = 
            state.metaDescription ||
            "Artax Consulting is your trusted partner for strategic management and digital transformation in an age of turbulence.";
    }, [state]);

    return (
        <motion.div {...pageFade} className="full-screen-cover">
            <SmallNavbar />
            <main className="single-business-glossary-page" >
                <section className="schedule">
                    <div className="container">
                        <div className="schedule-content">
                            {!state.h1 ? (
                                "loading..."
                            ) : (
                                <>
                                    <h1 className="display-3">{state.h1}</h1>
                                    <br/>
                                    {state.image && <img className="image" src={localData.images[state.image]}/>}
                                    <br/>
                                    <br/>
                                    <br/>
                                    {/* <p className="description" >{state.paragraph || "null"}</p> */}
                                    <p className="description" dangerouslySetInnerHTML={{ __html: state.paragraph || "null" }}></p>
                                    </>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
