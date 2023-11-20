import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../../components";
import localData from "../../../localData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";
import BusinessValuationSection from "../sections/business-valuation/BusinessValuationSection";

export default function BusinessValuationCalculator() {
    const { pageFade } = useGlobalContext().animations;
    const [state, setState] = useState({});
    const { preloader } = localData.images;

    useEffect(() => {
        document.title = "Business Valuation calculator";
    }, [state]);

    return (
        <motion.div {...pageFade} className="full-screen-cover">
            <SmallNavbar />
            <main className="business-valuation-calculator-page">
                <BusinessValuationSection />
            </main>
            <footer className="dark-footer"></footer>
        </motion.div>
    );
}
