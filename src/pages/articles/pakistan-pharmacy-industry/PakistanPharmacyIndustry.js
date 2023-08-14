import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar, Skeleton } from "../../../components";
import localData from "../../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";

// HEADER INNER
function HeaderInner() {
    return <div className="hero-inner"></div>;
}

export default function PakistanPharmacyIndustry() {
    const { pageFade } = useGlobalContext().animations;
    const { jp } = localData.images;

    useEffect(() => {
        document.title = "Pakistan Pharmaceutical Industry Outlook";
    }, []);

    return (
        <motion.div {...pageFade}>
            <Header title="home" className="hero-pakistan-pharmacy-industry">
                <SmallNavbar />
                <HeaderInner />
            </Header>
            <main className="pakistan-pharmacy-industry-page">
                <section className="showcase">
                    <div className="container-sm">
                        <h1 className="showcase-title display-4">Pakistan Pharmacy Business Guide</h1>
                        <br />
                        
                        {/* <img className="showcase-image" src={jp} alt="" />
                        <br />

                        <em>by Jonathan Poston</em>
                        <br />
                        <br />
                        <br /> */}

                        <p className="showcase-description text-1">
                            100 words
                            <br />
                            <br />
                            (in this paragraph talk about how many pharmacies there are in the country, in general
                            whether the industry is a good one for the nation, and just some high level stats)
                        </p>
                        <br />
                        <br />

                        <h2 className="display-5"> Becoming a Pharmacist in Pakistan</h2>
                        <p className="showcase-description text-1">
                            200 words - talk about how to become a pharmacist, the best schools, how much it cost, how
                            much the salary can be, the best cities to practice in, whether the degree is valid in the
                            uk or other countries, and what other training you need if you want to use your degree in
                            other countries.
                        </p>
                        <br />
                        <br />

                        <h2 className="display-5">Pharmacy Supply Chain </h2>
                        <p className="showcase-description text-1">
                            2100 words - talk briefly about where the medicine supply comes from and where it’s made.
                        </p>
                        <br />
                        <br />

                        <h2 className="display-5">Major Pharmaceutical Brands Active in Pakistan</h2>
                        <p className="showcase-description text-1">
                            100 words - Just list the brands there in bullets, like
                        </p>
                        <br />
                        <br />

                        <h2 className="display-5">How to Start a Pharmacy Business in Pakistan</h2>
                        <p className="showcase-description text-1">
                            100 words to say briefly what is required to start a pharmacy there.
                        </p>
                        <br />
                        <br />

                        <h2 className="display-5">Cost of Medicine in Pakistan, and Ordering Online</h2>
                        <p className="showcase-description text-1">
                            100 words to Talk about whether people around the world can order their medicine online from
                            Pakistan and why or why not, also mention the cost of drugs there.
                        </p>
                        <br />
                        <br />
                        
                        <h2 className="display-5">Risks and Outlook For the Pharmaceutical Business In Pakistan</h2>
                        <p className="showcase-description text-1">
                        100 words to Talk about the corruption, or anything that is a risk. 
                        </p>
                        <br />
                        <br />

                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
