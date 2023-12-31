import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar, Skeleton } from "../../components";
import localData from "../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function BusinessPeople() {
    const { pageFade } = useGlobalContext().animations;
    const { businessPeopleData,resetMetaTags } = useGlobalContext();
    const [slugs, setSlugs] = useState([]);

    useEffect(() => {
        if (Object.keys(businessPeopleData).length === 0) return;
        setSlugs(Object.keys(businessPeopleData));
    }, [businessPeopleData]);

    useEffect(() => {
        resetMetaTags()
    }, []);

    return (
        <motion.div {...pageFade} className="full-screen-cover">
            <SmallNavbar />
            <main className="business-people-page">
                <section className="schedule">
                    <div className="container">
                        <div className="schedule-content">
                            <h1 className="display-1">Business People</h1>
                            <br />
                            <br />
                            <div className="links">
                                {!slugs.length ? (
                                    <Skeleton />
                                ) : (
                                    slugs.map((slug, index) => (
                                        <div key={index}>
                                            <Link
                                                to={`/business-people/${slug}`}
                                                className="link-primary"
                                                underline="hover"
                                            >
                                                {slug}
                                            </Link>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
