import React, { useEffect } from "react";
import { Header, Footer, Button, SmallNavbar } from "../../components";
import localData from "../../localData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function PrivacyPolicy() {
    const { pageFade } = useGlobalContext().animations;
    const { anglesLeft } = localData.svgs;

    useEffect(() => {
        const content = document.querySelector('.schedule-content')
        console.log(content.innerHTML)
        if(content.innerHTML !== '') return

        document.title = "schedule a call";
        const div = document.createElement('div')
        div.className = 'calendly-inline-widget'
        div.setAttribute('data-url', 'https://calendly.com/info-npy/schedule-a-call')

        const script = document.createElement('script')
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true
        content.appendChild(div);
        content.appendChild(script);
    }, []);

    return (
        <motion.div {...pageFade}>
            <SmallNavbar />
            <main className="schedule-page">
                <section className="schedule">
                    <div className="container">

                        <div className="schedule-content">

                        </div>
                    </div>
                </section>
            </main>
            <footer className="dark-footer"></footer>
            {/* <Footer /> */}
        </motion.div>
    );
}
