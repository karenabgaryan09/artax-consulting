import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { useObserver } from "../../hooks/lazy-load/useObserver";

// HEADER
function HeaderInner() {
    const { ref: blockRef, inView: heroInView } = useObserver();

    return (
        <div className="hero-inner">
            <div
                className={`container ${heroInView ? "lazy-animate" : ""}`}
                data-lazy="fade-up"
                ref={blockRef}
                // style={{ transitionDelay: (300 || 1 * 0.1) + "s" }}
            >
                <h1 className="hero-title display-3">Jonathan Poston M.E.</h1>
                <h2 className="hero-description">
                    Jonathan Poston, M.E. has worked with Fortune brands as a consultant providing strategic guidance on
                    digital transformation, digital strategy, solving complex business problems,etc.
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
            <main className="masterclass-page">
                <section className="showcase">
                    <div className="container-sm">
                        <h2 className="showcase-title display-4">EXPEDITION CRUISING – GOLDMINE OR BUBBLE? PART 2</h2>
                        <br />
                        <img className="showcase-image" src={jp} alt="" />
                        <br />

                        <em>by Jonathan Poston</em>
                        <br />
                        <br />
                        <br />

                        <p className="showcase-description text-1">
                            A few years ago I wrote an article about the exceptionally fast developments in the
                            expedition cruise industry. With 32 new ships on order at the time, this niche segment of
                            the cruise market was facing a huge expansion and was positioned as{" "}
                            <a href="/#/" taget="_blank" className=" link link-primary" underline="always">
                                “the next big thing in travel”
                            </a>{" "}
                            . With such high expectations about future growth, I asked if Expedition Cruising was the
                            goldmine promised or a “bubble”. Now a few years and one global pandemic later, it is a good
                            time to reflect back on that question.
                        </p>
                        <br />
                        <br />
                        
                        <h5 className="display-5">THE COVID PANDEMIC</h5>

                        <div className="showcase-description text-1">
                            Needless to say, the COVID-19 pandemic hit the cruise industry hard, like every travel
                            industry-related business. All expedition vessels were laid up for more than a year and
                            future demand was heavily affected. And although the Western markets have recovered rapidly
                            in the last year, the Asian markets, notably China, remain affected. Five years ago, China
                            was seen as a big opportunity for the expedition cruise industry. However, the Chinese
                            outbound market was closed for a long time, only recently reopening. At this stage it is
                            unclear if the market will recover soon, or how fast. Indications are that a rapid surge is
                            not expected.
                            <br />
                            <br />
                            While mainstream cruising was retiring older ships, this did not happen in expedition
                            cruising. In fact, the nostalgia of the old expedition cruise ship experiences, and the
                            loyal following of some of these older vessels have, leads to ships being reused over and
                            over again. A great example is the famous 40-year-old Polar Pioneer, once retired by Aurora
                            Expeditions, and now back on the scene. This means that most new ships are additional
                            capacity, not replacing any old tonnage.
                            <br />
                            <br />
                            The only ships withdrawn from the market seem to be the Russian-owned scientific vessels and
                            icebreakers. Though, this was not driven by the pandemic, but by the war in Ukraine and the
                            pre-COVID insolvency of One Ocean Expeditions, an operator using mainly Russian scientific
                            ships.
                        </div>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
