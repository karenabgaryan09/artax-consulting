import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import SeoSection from "./sections/seo/SeoSection";
import RoasSection from "./sections/roas/RoasSection";
import BusinessValuationSection from "./sections/business-valuation/BusinessValuationSection";

export default function PrivacyPolicy() {
    const { pageFade } = useGlobalContext().animations;
    const { calculatorCover } = localData.images;

    useEffect(() => {
        document.title = "Calculators";
    }, []);

    return (
        <motion.div {...pageFade}  className="full-screen-cover">
            <SmallNavbar  />
            <main className="calculators-page">
                <div className="showcase">
                    <img src={calculatorCover} />
                </div>
                <section>
                    <div className="container">
                    <Link to={'/calculators/seo-calculator'} className="link-primary" underline="hover">
                    SEO Calculator
                    </Link>
                    <br/>
                    <br/>
                    <Link to={'/calculators/roas-calculator'} className="link-primary" underline="hover">
                    ROAS Calculator
                    </Link>
                    <br/>
                    <br/>
                    <Link to={'/calculators/business-valuation-calculator'} className="link-primary" underline="hover">
                    Business Valuation Calculator
                    </Link>

                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
