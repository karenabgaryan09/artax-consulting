import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";

// HEADER INNER
function HeaderInner() {
    const { ref: blockRef, inView: heroInView } = useObserver();
    const { jp } = localData.images;

    return (
        <div className="hero-inner">
            <div
                className={`container ${heroInView ? "lazy-animate" : ""}`}
                data-lazy="fade-up"
                ref={blockRef}
                // style={{ transitionDelay: (300 || 1 * 0.1) + "s" }}
            >
                {/* <img src={jp} width={300} alt="" /> */}
                <h1 className="hero-title display-3">Jonathan Poston M.E.</h1>
                <h2 className="hero-description">
                    Jonathan Poston, M.E. has worked with Fortune brands as a consultant providing strategic guidance on
                    digital transformation, digital strategy, and solving complex business problems.
                    <br />
                    <br />
                    Poston has also delivered courses related to business, digital strategy, and international trade, as
                    a full-time professor and / or guest speaker, at Virginia Tech, Warren Wilson College, Liaoning
                    Normal University(China), Duke University, Case Western University, Galen University (Belize), and
                    UEES - Universidad Espíritu Santo (Ecuador).
                </h2>
                <Link to="/">
                    <Button
                        variant="contained"
                        color="primary"
                        name="get in touch"
                        size="lg"
                        className="hero-btn"
                        onClick={() => {
                            setTimeout(() => {
                                const a = document.createElement("a");
                                a.href = "#contact";
                                a.click();
                            }, 1000);
                        }}
                    />
                </Link>
            </div>
        </div>
    );
}

export default function Masterclass() {
    const { pageFade } = useGlobalContext().animations;
    const { anglesLeft } = localData.svgs;
    const { jp } = localData.images;

    useEffect(() => {
        document.title = "Jonathan Poston M.E. | Artax Consulting";
    }, []);

    return (
        <motion.div {...pageFade}>
            <Header title="home" className="hero-masterclass">
                <SmallNavbar />
                <HeaderInner />
            </Header>
            {/* <main className="masterclass-page">
                
            </main> */}
            {/* <footer className="dark-footer"></footer> */}
            {/* <Footer /> */}
        </motion.div>
    );
}
