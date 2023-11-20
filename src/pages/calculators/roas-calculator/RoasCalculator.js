import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../../components";
import localData from "../../../localData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";
import RoasSection from "../sections/roas/RoasSection";

export default function RoasCalculator() {
    const { pageFade } = useGlobalContext().animations;
    const [state, setState] = useState({});
    const { preloader } = localData.images;

    useEffect(() => {
        document.title = "ROAS Calculator";
        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.content =
            "Try our free online Return on Advertising Spend (ROAS) Calculator – your go-to tool for precision in assessing the effectiveness of your advertising campaigns. Input your revenue from ads and the total cost of advertising, and let the calculator crunch the numbers instantly. Optimize your marketing strategy by gaining valuable insights into the efficiency of your ad investments";
    }, [state]);

    return (
        <motion.div {...pageFade} className="full-screen-cover">
            <SmallNavbar />
            <main className="roas-calculator-page">
                <RoasSection />
            </main>
            <footer className="dark-footer"></footer>
        </motion.div>
    );
}
