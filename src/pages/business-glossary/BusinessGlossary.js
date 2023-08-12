import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar,Skeleton } from "../../components";
import localData from "../../localData";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function BusinessGlossary() {
    const { pageFade } = useGlobalContext().animations;
    const { businessGlossaryData } = useGlobalContext();
    const [slugs, setSlugs] = useState([]);

    useEffect(() => {
        if (Object.keys(businessGlossaryData).length === 0) return;

        setSlugs(Object.keys(businessGlossaryData));
    }, [businessGlossaryData]);

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            <main className="business-glossary-page">
                <section className="schedule">
                    <div className="container">
                        <div className="schedule-content">
                            <h1 className="display-1">Business Glossary</h1>
                            <br />
                            <br />
                            <div className="links">
                                {!slugs.length
                                    ? <Skeleton/>
                                    : slugs.map((slug, index) => (
                                       <div key={index}>
                                           <Link to={`/business-glossary/${slug}`} className="link-primary" underline='hover'>
                                               {slug}
                                           </Link>
                                       </div>
                                      ))}
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
