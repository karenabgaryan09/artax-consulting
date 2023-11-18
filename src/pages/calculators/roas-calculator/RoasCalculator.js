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
        document.description =
            "Artax Consulting is your trusted partner for strategic management and digital transformation in an age of turbulence.";
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
