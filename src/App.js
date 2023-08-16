import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Home,
    PrivacyPolicy,
    Error,
    Calculators,
    Schedule,
    ReductionConsultants,
    BusinessGlossary,
    SingleBusinessGlossary,
    Masterclass,
    PakistanPharmacyIndustry
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // top: 500,
            behavior: "smooth",
            // behavior: "auto",
        });
    }, [location.pathname]);

    return (
        <>
            <ToastContainer autoClose={3000} />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/calculators" element={<Calculators />} />
                    <Route path="/cost-reduction-consultants" element={<ReductionConsultants />} />
                    <Route path="/schedule-a-call" element={<Schedule />} />
                    <Route path="/consultants/jonathan-poston" element={<Masterclass />} />
                    <Route path="/expert-advice/pakistan-pharmacy-industry" element={<PakistanPharmacyIndustry />} />
                    <Route path="/business-glossary" element={<BusinessGlossary />} />
                    <Route path="/business-glossary/:slug" element={<SingleBusinessGlossary />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
