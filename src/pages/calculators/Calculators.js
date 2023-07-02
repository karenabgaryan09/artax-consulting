import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar, } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import SeoSection from "./sections/seo/SeoSection";
import RoasSection from "./sections/roas/RoasSection";
import BusinessValuationSection from "./sections/business-valuation/BusinessValuationSection";

export default function PrivacyPolicy() {
    const { pageFade } = useGlobalContext().animations;
    const { anglesLeft } = localData.svgs;

    useEffect(() => {
        document.title = "Calculators";
    }, []);

    return (
        <motion.div {...pageFade}>
           <SmallNavbar className="sticky"/>
            <main className="calculators-page">
               <SeoSection/>
               <RoasSection/>
               <BusinessValuationSection/>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
