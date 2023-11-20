import React, { useState, useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../../components";
import localData from "../../../localData";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context";
import SeoSection from "../sections/seo/SeoSection";

export default function SeoCalculator() {
    const { pageFade } = useGlobalContext().animations;
    const { preloader } = localData.images;

    useEffect(() => {
        document.title = "SEO keyword ROI value calculator";

        const metaDescription = document.querySelector('meta[name="description"]');
        metaDescription.content =
        "This SEO keyword ROI value calculator requires inputs of monthly search volume, position, organic conversion rate, average order value in dollars, and it will calculate the revenue value of your SEO keywords.";
    }, []);

    return (
        <motion.div {...pageFade} className="full-screen-cover">
            <SmallNavbar />
            <main className="seo-calculator-page">
                <SeoSection />
            </main>
            <footer className="dark-footer"></footer>
        </motion.div>
    );
}
